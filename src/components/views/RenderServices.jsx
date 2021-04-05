import React, { useContext } from 'react';
import Context from '../../Context';
import { Paginate, ManagePagination } from '../common/ManagePagination';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const RenderServices = () => {
  const context = useContext(Context);

  const allServices = Paginate(
    context.services(),
    context.currentPage(),
    context.pageSize()
  );

  return (
    <React.Fragment>
      <div className="mb-3">
        {allServices.map((s) => (
          <Card>
            <CardBody>
              <CardTitle tag="h5">{s.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {s.id}
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        ))}
      </div>
      <ManagePagination />
    </React.Fragment>
  );
};

export default RenderServices;
