/**
 * Functions to translate JSON schema to GraphQL (input) object types.
 */
import { PreprocessingData } from './types/preprocessing_data';
import { Operation, DataDefinition } from './types/operation';
import { SchemaObject, ParameterObject } from './types/oas3';
import { Args, GraphQLType } from './types/graphql';
import { GraphQLOutputType, GraphQLInputType } from 'graphql';
declare type GetArgsParams<TSource, TContext, TArgs> = {
    requestPayloadDef?: DataDefinition;
    parameters: ParameterObject[];
    operation?: Operation;
    data: PreprocessingData<TSource, TContext, TArgs>;
};
declare type CreateOrReuseComplexTypeParams<TSource, TContext, TArgs> = {
    def: DataDefinition;
    schema?: SchemaObject;
    operation?: Operation;
    iteration?: number;
    isInputObjectType?: boolean;
    data: PreprocessingData<TSource, TContext, TArgs>;
};
/**
 * Creates and returns a GraphQL type for the given JSON schema.
 */
export declare function getGraphQLType<TSource, TContext, TArgs>({ def, schema, operation, data, iteration, isInputObjectType }: CreateOrReuseComplexTypeParams<TSource, TContext, TArgs>): GraphQLOutputType | GraphQLInputType | GraphQLType;
/**
 * Creates the arguments for resolving a field
 *
 * Arguments that are provided via options will be ignored
 */
export declare function getArgs<TSource, TContext, TArgs>({ requestPayloadDef, parameters, operation, data }: GetArgsParams<TSource, TContext, TArgs>): Args;
export {};
