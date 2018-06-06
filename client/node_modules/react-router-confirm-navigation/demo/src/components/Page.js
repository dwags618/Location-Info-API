import React from 'react';
import ConfirmNavigation from '../../../lib';
import Confirm from './Confirm';

export default () => {
  return (
    <div>
      <ConfirmNavigation allowBackButton>
        <Confirm
          onConfirmNavigation={(nextLocation) => {
            console.log('navigation allowed to ', nextLocation.pathname);
          }}
          onCancelNavigation={(nextLocation) => {
            console.log('navigation cancelled to ', nextLocation.pathname);
          }}
          allowNavigation={(nextLocation) => {
            return nextLocation.pathname === '/';
          }}
        />
      </ConfirmNavigation>
      page 1
    </div>
  );
};
