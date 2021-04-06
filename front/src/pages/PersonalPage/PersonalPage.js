import React from 'react';
import { ContentUI } from '../../ui/ContentUI';
import { HeaderUI } from '../../ui/HeaderUI';
import { PageUI } from '../../ui/PageUI';

export const PersonalPage = () => {
  return (
    <PageUI>
      <HeaderUI>Статистика</HeaderUI>
      <ContentUI>Моя Статистика</ContentUI>
    </PageUI>
  );
};
