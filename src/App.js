import React from 'react';
import { AppProvider, EmptyState, Page } from '@shopify/polaris';

export default class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <Page>
        <EmptyState
          heading="React with Polaris"
          secondaryAction={{content: 'More about Polaris', url: 'https://polaris.shopify.com/components/get-started'}}
          image={process.env.PUBLIC_URL + "logo512.png"}
        >
        </EmptyState>
        </Page>
      </AppProvider>
    );
  }
}
