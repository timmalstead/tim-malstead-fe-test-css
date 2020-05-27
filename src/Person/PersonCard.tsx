/** @jsx jsx */
import React from 'react';
import cn from 'classnames';
import { css, jsx } from '@emotion/core';
import { Account } from '../App';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { COLORS } from '../colors';
import BREAKPOINTS from '../breakpoints';

type Props = {
  className?: string;
  accountData: Account;
};

const PersonCard: React.FC<Props> = props => {
  const { className = '', accountData } = props;

  const theme = useTheme();

  const style = css`
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.BG_COLOR};
    border: 2px solid ${COLORS.BORDER_COLOR};
    justify-content: center;
    align-items: center;
    padding: ${theme.spacing(2)}px 0;

    @media (max-width: ${BREAKPOINTS[0]}px) {
      flex-direction: row;
    }

    @media (max-width: ${BREAKPOINTS[1]}px) {
      flex-direction: column;
    }

    .textHolder {
      text-align: center;
      margin: 0 ${theme.spacing(3)}px;
    }

    .PersonCard-Avatar {
      height: 150px;
      width: 150px;
      border-radius: 100%;
      border: 4px solid ${COLORS.BORDER_COLOR};
    }

    .link {
      color: ${COLORS.LINK_COLOR};
      transition: color .4s ease;

      &:hover {
        color: ${COLORS.LINK_SECONDARY_COLOR};
        cursor: pointer;
      }
    }
  `;

  const fullName = `${accountData.firstName} ${accountData.lastName}`;

  return (
    <div className={cn(className, 'PersonCard')} css={style}>
      <img
        className="PersonCard-Avatar"
        src={accountData.accountImage.url}
        alt={fullName}
      />
      <span className="textHolder">
        <Typography className="link" variant="h6">
          {fullName}
        </Typography>
        <Typography variant="body2">
          {`${accountData.locationCity}, ${accountData.locationArea}`}
        </Typography>
      </span>
    </div>
  );

};

export default PersonCard;

