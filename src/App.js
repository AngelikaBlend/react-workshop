import React from 'react';
import { AppProvider, Page } from '@shopify/polaris';

export default class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <Page>
        </Page>
      </AppProvider>
    );
  }
}
