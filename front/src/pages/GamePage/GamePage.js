import React from 'react';
import { ContentUI } from '../../ui/ContentUI';
import { HeaderUI } from '../../ui/HeaderUI';
import { PageUI } from '../../ui/PageUI';
import { TableCards } from '../../components/TableCards';

export const GamePage = () => {
  return (
    <PageUI>
      <HeaderUI>Игра</HeaderUI>
      <ContentUI>
        <TableCards />
      </ContentUI>
    </PageUI>
  );
};
