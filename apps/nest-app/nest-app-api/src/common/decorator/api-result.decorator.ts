import { Type, applyDecorators } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { ResultData } from '../utils/result';

const baseTypeNames = ['String', 'Number', 'Boolean'];

export const ApiResult = <TModel extends Type<any>>(
  model?: TModel,
  isArray?: boolean,
  isPager?: boolean
) => {
  let items = null;
  if (model && baseTypeNames.includes(model.name)) {
    items = { type: model.name.toLocaleLowerCase() };
  } else {
    items = { $ref: getSchemaPath(model) };
  }
  let prop = null;
  if (isArray && isPager) {
    prop = {
      type: 'object',
      properties: {
        list: {
          type: 'array',
          items,
        },
        total: {
          type: 'number',
          default: 0,
        },
      },
    };
  } else if (isArray) {
    prop = {
      type: 'array',
      items,
    };
  } else if (model) {
    prop = items;
  } else {
    prop = { type: 'null', default: null };
  }
  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResultData) },
          {
            properties: {
              data: prop,
            },
          },
        ],
      },
    })
  );
};
