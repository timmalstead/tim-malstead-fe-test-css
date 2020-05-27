/** @jsx jsx */
import React from 'react';
import cn from 'classnames';
import { css, jsx } from '@emotion/core';
// import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Account } from '../App';
import PersonCredit from './PersonCredit';
import { COLORS } from '../colors'


type Props = {
  className?: string;
  accountData: Account;
  maxCredits?: number;
};

const PersonDetails: React.FC<Props> = props => {
  const {
    className = '',
    accountData,
    maxCredits = 3
  } = props;

  console.log(accountData)
  // const theme = useTheme();

  const style = css`
  background-color: ${COLORS.LIGHT_BG};
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex: 1;
  `;

  const buttonStyle = css`
    padding: 12px 8px !important;
  `;

  return (
    <div className={cn(className, 'PersonDetails')} css={style}>
      {accountData.credits.slice(0, maxCredits).map((credit, i) => {
        return (
          <PersonCredit key={credit.id} creditData={credit} i={i} />
        )
      })}
      <Button className="contact" color="primary" css={buttonStyle}>
        Contact {accountData.firstName} {accountData.lastName}
      </Button>
    </div>
  )
};

export default PersonDetails;
