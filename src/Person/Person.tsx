/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';
import cn from 'classnames';
// import { useTheme } from '@material-ui/core/styles';

import PersonCard from './PersonCard';
import { Account } from '../App';
import PersonDetails from './PersonDetails';
import { COLORS } from '../colors';
import BREAKPOINTS from '../breakpoints';

type Props = {
  className?: string;
  accountData: Account;
};

const Person: React.FC<Props> = props => {
  const { className = '', accountData } = props;
  // const theme = useTheme();
  const style = css`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: row;

  @media (max-width: ${BREAKPOINTS[0]}px) {
    flex-direction: column;
  }

    .Person {
      width: 850px;
    }

    .PersonCard-container {
      width: 300px;
    }

    .PersonDetails-container {
      width: 532px;
      border: 2px solid ${COLORS.BORDER_COLOR};
      border-left: none;
      @media (max-width: ${BREAKPOINTS[0]}px) {
        border-right: none;
        border-top: none;
      }
    }

    .PersonCard-container, .PersonDetails-container {
      @media (max-width: ${BREAKPOINTS[0]}px) {
        width: 100vw;
      }
    }
  `;

  return (
    <div className={cn(className, 'Person')} css={style}>
      <div className="PersonCard-container">
        <PersonCard accountData={accountData} />
      </div>
      <div className="PersonDetails-container">
        <PersonDetails accountData={accountData} />
      </div>
    </div>
  )
};

export default Person;
