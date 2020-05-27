/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import cn from 'classnames';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { Credit } from '../App';
import { COLORS } from '../colors';

type Props = {
  className?: string;
  creditData: Credit;
  i: number;
}

const PersonCredit: React.FC<Props> = props => {
  const { className = '', creditData, i } = props;
  const theme = useTheme();


  const style = css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: ${i % 2 === 0 ? COLORS.BG_COLOR : "transparent"};

    .credit-top {
      margin: ${theme.spacing(1)}px 0;

      &-left {
        padding-left: ${theme.spacing(1)}px;
        font-weight: 800;
      }

      &-right {
        padding-right: ${theme.spacing(1)}px;
        text-align: right;
        font-style: italic;
      }
    }

    .credit-bottom {

      color: gray;

      &-left {
        padding-left: ${theme.spacing(1)}px;
        font-weight: 400;
      }

      &-right {
        padding-right: ${theme.spacing(1)}px;
        text-align: right;
      }
    }

    &:not(:last-of-type) {
      border-bottom: 1px solid ${COLORS.BORDER_COLOR};
    }

  `;

  return (
    <div className={cn(className, 'PersonCredit')} css={style}>
      <div className="PersonCredit-left">
        <Typography className="credit-top credit-top-left" variant="body1">
          {creditData.position}
        </Typography>
        <Typography className="credit-bottom credit-bottom-left" variant="body1">
          {creditData.productionType}
        </Typography>
      </div>
      <div className="PersonCredit-right">
        <Typography className="credit-top credit-top-right" variant="body1">
          {creditData.productionTitle}
        </Typography>
        <Typography className="credit-bottom credit-bottom-right" variant="body1">
          {creditData.year}
        </Typography>
      </div>
    </div>
  );
};

export default PersonCredit;