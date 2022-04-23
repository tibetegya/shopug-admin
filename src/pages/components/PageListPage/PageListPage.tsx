import { Card } from "@material-ui/core";
import Container from "@saleor/components/Container";
import PageHeader from "@saleor/components/PageHeader";
import { PageFragment } from "@saleor/graphql";
import { sectionNames } from "@saleor/intl";
import { Button } from "@saleor/macaw-ui";
import {
  PageListUrlDialog,
  PageListUrlQueryParams,
  PageListUrlSortField
} from "@saleor/pages/urls";
import { ListActions, PageListProps, SortPage } from "@saleor/types";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import PageList from "../PageList";
import PageListSearchAndFilters from "./PageListSearchAndFilters";

export interface PageListActionDialogOpts {
  open: (action: PageListUrlDialog, newParams?: PageListUrlQueryParams) => void;
  close: () => void;
}
export interface PageListPageProps
  extends PageListProps,
    ListActions,
    SortPage<PageListUrlSortField> {
  pages: PageFragment[];
  params: PageListUrlQueryParams;
  actionDialogOpts: PageListActionDialogOpts;
}

const PageListPage: React.FC<PageListPageProps> = ({
  onAdd,
  params,
  actionDialogOpts,
  ...listProps
}) => {
  const intl = useIntl();

  return (
    <Container>
      <PageHeader title={intl.formatMessage(sectionNames.pages)}>
        <Button onClick={onAdd} variant="primary" data-test-id="create-page">
          <FormattedMessage defaultMessage="Create page" description="button" />
        </Button>
      </PageHeader>
      <Card>
        <PageListSearchAndFilters
          params={params}
          actionDialogOpts={actionDialogOpts}
        />
        <PageList {...listProps} />
      </Card>
    </Container>
  );
};
PageListPage.displayName = "PageListPage";
export default PageListPage;