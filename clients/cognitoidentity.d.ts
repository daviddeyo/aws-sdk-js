import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
declare class CognitoIdentity extends Service {
  /**
   * Creates a new identity pool. The identity pool is a store of user identity information that is specific to your AWS account. The limit on identity pools is 60 per account. The keys for SupportedLoginProviders are as follows:  Facebook: graph.facebook.com Google: accounts.google.com Amazon: www.amazon.com Twitter: api.twitter.com Digits: www.digits.com  You must use AWS Developer credentials to call this API.
   */
  createIdentityPool(params: CognitoIdentity.CreateIdentityPoolInput, callback?: (err: AWSError, data: CognitoIdentity.IdentityPool) => void): Request<CognitoIdentity.IdentityPool, AWSError>;
  /**
   * Creates a new identity pool. The identity pool is a store of user identity information that is specific to your AWS account. The limit on identity pools is 60 per account. The keys for SupportedLoginProviders are as follows:  Facebook: graph.facebook.com Google: accounts.google.com Amazon: www.amazon.com Twitter: api.twitter.com Digits: www.digits.com  You must use AWS Developer credentials to call this API.
   */
  createIdentityPool(callback?: (err: AWSError, data: CognitoIdentity.IdentityPool) => void): Request<CognitoIdentity.IdentityPool, AWSError>;
  /**
   * Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.You must use AWS Developer credentials to call this API.
   */
  deleteIdentities(params: CognitoIdentity.DeleteIdentitiesInput, callback?: (err: AWSError, data: CognitoIdentity.DeleteIdentitiesResponse) => void): Request<CognitoIdentity.DeleteIdentitiesResponse, AWSError>;
  /**
   * Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.You must use AWS Developer credentials to call this API.
   */
  deleteIdentities(callback?: (err: AWSError, data: CognitoIdentity.DeleteIdentitiesResponse) => void): Request<CognitoIdentity.DeleteIdentitiesResponse, AWSError>;
  /**
   * Deletes a user pool. Once a pool is deleted, users will not be able to authenticate with the pool.You must use AWS Developer credentials to call this API.
   */
  deleteIdentityPool(params: CognitoIdentity.DeleteIdentityPoolInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a user pool. Once a pool is deleted, users will not be able to authenticate with the pool.You must use AWS Developer credentials to call this API.
   */
  deleteIdentityPool(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns metadata related to the given identity, including when the identity was created and any associated linked logins.You must use AWS Developer credentials to call this API.
   */
  describeIdentity(params: CognitoIdentity.DescribeIdentityInput, callback?: (err: AWSError, data: CognitoIdentity.IdentityDescription) => void): Request<CognitoIdentity.IdentityDescription, AWSError>;
  /**
   * Returns metadata related to the given identity, including when the identity was created and any associated linked logins.You must use AWS Developer credentials to call this API.
   */
  describeIdentity(callback?: (err: AWSError, data: CognitoIdentity.IdentityDescription) => void): Request<CognitoIdentity.IdentityDescription, AWSError>;
  /**
   * Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.You must use AWS Developer credentials to call this API.
   */
  describeIdentityPool(params: CognitoIdentity.DescribeIdentityPoolInput, callback?: (err: AWSError, data: CognitoIdentity.IdentityPool) => void): Request<CognitoIdentity.IdentityPool, AWSError>;
  /**
   * Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.You must use AWS Developer credentials to call this API.
   */
  describeIdentityPool(callback?: (err: AWSError, data: CognitoIdentity.IdentityPool) => void): Request<CognitoIdentity.IdentityPool, AWSError>;
  /**
   * Returns credentials for the provided identity ID. Any provided logins will be validated against supported login providers. If the token is for cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service with the appropriate role for the token.This is a public API. You do not need any credentials to call this API.
   */
  getCredentialsForIdentity(params: CognitoIdentity.GetCredentialsForIdentityInput, callback?: (err: AWSError, data: CognitoIdentity.GetCredentialsForIdentityResponse) => void): Request<CognitoIdentity.GetCredentialsForIdentityResponse, AWSError>;
  /**
   * Returns credentials for the provided identity ID. Any provided logins will be validated against supported login providers. If the token is for cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service with the appropriate role for the token.This is a public API. You do not need any credentials to call this API.
   */
  getCredentialsForIdentity(callback?: (err: AWSError, data: CognitoIdentity.GetCredentialsForIdentityResponse) => void): Request<CognitoIdentity.GetCredentialsForIdentityResponse, AWSError>;
  /**
   * Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.This is a public API. You do not need any credentials to call this API.
   */
  getId(params: CognitoIdentity.GetIdInput, callback?: (err: AWSError, data: CognitoIdentity.GetIdResponse) => void): Request<CognitoIdentity.GetIdResponse, AWSError>;
  /**
   * Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.This is a public API. You do not need any credentials to call this API.
   */
  getId(callback?: (err: AWSError, data: CognitoIdentity.GetIdResponse) => void): Request<CognitoIdentity.GetIdResponse, AWSError>;
  /**
   * Gets the roles for an identity pool.You must use AWS Developer credentials to call this API.
   */
  getIdentityPoolRoles(params: CognitoIdentity.GetIdentityPoolRolesInput, callback?: (err: AWSError, data: CognitoIdentity.GetIdentityPoolRolesResponse) => void): Request<CognitoIdentity.GetIdentityPoolRolesResponse, AWSError>;
  /**
   * Gets the roles for an identity pool.You must use AWS Developer credentials to call this API.
   */
  getIdentityPoolRoles(callback?: (err: AWSError, data: CognitoIdentity.GetIdentityPoolRolesResponse) => void): Request<CognitoIdentity.GetIdentityPoolRolesResponse, AWSError>;
  /**
   * Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by GetId. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link. The OpenId token is valid for 15 minutes.This is a public API. You do not need any credentials to call this API.
   */
  getOpenIdToken(params: CognitoIdentity.GetOpenIdTokenInput, callback?: (err: AWSError, data: CognitoIdentity.GetOpenIdTokenResponse) => void): Request<CognitoIdentity.GetOpenIdTokenResponse, AWSError>;
  /**
   * Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by GetId. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link. The OpenId token is valid for 15 minutes.This is a public API. You do not need any credentials to call this API.
   */
  getOpenIdToken(callback?: (err: AWSError, data: CognitoIdentity.GetOpenIdTokenResponse) => void): Request<CognitoIdentity.GetOpenIdTokenResponse, AWSError>;
  /**
   * Registers (or retrieves) a Cognito IdentityId and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the Logins map, which is linked to the identity pool. The developer provider is the "domain" by which Cognito will refer to your users. You can use GetOpenIdTokenForDeveloperIdentity to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the IdentityId should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing IdentityId. This API will create the identity in the specified IdentityPoolId.You must use AWS Developer credentials to call this API.
   */
  getOpenIdTokenForDeveloperIdentity(params: CognitoIdentity.GetOpenIdTokenForDeveloperIdentityInput, callback?: (err: AWSError, data: CognitoIdentity.GetOpenIdTokenForDeveloperIdentityResponse) => void): Request<CognitoIdentity.GetOpenIdTokenForDeveloperIdentityResponse, AWSError>;
  /**
   * Registers (or retrieves) a Cognito IdentityId and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the Logins map, which is linked to the identity pool. The developer provider is the "domain" by which Cognito will refer to your users. You can use GetOpenIdTokenForDeveloperIdentity to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the IdentityId should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing IdentityId. This API will create the identity in the specified IdentityPoolId.You must use AWS Developer credentials to call this API.
   */
  getOpenIdTokenForDeveloperIdentity(callback?: (err: AWSError, data: CognitoIdentity.GetOpenIdTokenForDeveloperIdentityResponse) => void): Request<CognitoIdentity.GetOpenIdTokenForDeveloperIdentityResponse, AWSError>;
  /**
   * Lists the identities in a pool.You must use AWS Developer credentials to call this API.
   */
  listIdentities(params: CognitoIdentity.ListIdentitiesInput, callback?: (err: AWSError, data: CognitoIdentity.ListIdentitiesResponse) => void): Request<CognitoIdentity.ListIdentitiesResponse, AWSError>;
  /**
   * Lists the identities in a pool.You must use AWS Developer credentials to call this API.
   */
  listIdentities(callback?: (err: AWSError, data: CognitoIdentity.ListIdentitiesResponse) => void): Request<CognitoIdentity.ListIdentitiesResponse, AWSError>;
  /**
   * Lists all of the Cognito identity pools registered for your account.You must use AWS Developer credentials to call this API.
   */
  listIdentityPools(params: CognitoIdentity.ListIdentityPoolsInput, callback?: (err: AWSError, data: CognitoIdentity.ListIdentityPoolsResponse) => void): Request<CognitoIdentity.ListIdentityPoolsResponse, AWSError>;
  /**
   * Lists all of the Cognito identity pools registered for your account.You must use AWS Developer credentials to call this API.
   */
  listIdentityPools(callback?: (err: AWSError, data: CognitoIdentity.ListIdentityPoolsResponse) => void): Request<CognitoIdentity.ListIdentityPoolsResponse, AWSError>;
  /**
   * Retrieves the IdentityID associated with a DeveloperUserIdentifier or the list of DeveloperUserIdentifiers associated with an IdentityId for an existing identity. Either IdentityID or DeveloperUserIdentifier must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, DeveloperUserIdentifier will be matched against IdentityID. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise a ResourceConflictException is thrown.You must use AWS Developer credentials to call this API.
   */
  lookupDeveloperIdentity(params: CognitoIdentity.LookupDeveloperIdentityInput, callback?: (err: AWSError, data: CognitoIdentity.LookupDeveloperIdentityResponse) => void): Request<CognitoIdentity.LookupDeveloperIdentityResponse, AWSError>;
  /**
   * Retrieves the IdentityID associated with a DeveloperUserIdentifier or the list of DeveloperUserIdentifiers associated with an IdentityId for an existing identity. Either IdentityID or DeveloperUserIdentifier must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, DeveloperUserIdentifier will be matched against IdentityID. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise a ResourceConflictException is thrown.You must use AWS Developer credentials to call this API.
   */
  lookupDeveloperIdentity(callback?: (err: AWSError, data: CognitoIdentity.LookupDeveloperIdentityResponse) => void): Request<CognitoIdentity.LookupDeveloperIdentityResponse, AWSError>;
  /**
   * Merges two users having different IdentityIds, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (SourceUserIdentifier) with the IdentityId of the DestinationUserIdentifier. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown.You must use AWS Developer credentials to call this API.
   */
  mergeDeveloperIdentities(params: CognitoIdentity.MergeDeveloperIdentitiesInput, callback?: (err: AWSError, data: CognitoIdentity.MergeDeveloperIdentitiesResponse) => void): Request<CognitoIdentity.MergeDeveloperIdentitiesResponse, AWSError>;
  /**
   * Merges two users having different IdentityIds, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (SourceUserIdentifier) with the IdentityId of the DestinationUserIdentifier. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown.You must use AWS Developer credentials to call this API.
   */
  mergeDeveloperIdentities(callback?: (err: AWSError, data: CognitoIdentity.MergeDeveloperIdentitiesResponse) => void): Request<CognitoIdentity.MergeDeveloperIdentitiesResponse, AWSError>;
  /**
   * Sets the roles for an identity pool. These roles are used when making calls to GetCredentialsForIdentity action.You must use AWS Developer credentials to call this API.
   */
  setIdentityPoolRoles(params: CognitoIdentity.SetIdentityPoolRolesInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the roles for an identity pool. These roles are used when making calls to GetCredentialsForIdentity action.You must use AWS Developer credentials to call this API.
   */
  setIdentityPoolRoles(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Unlinks a DeveloperUserIdentifier from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible.You must use AWS Developer credentials to call this API.
   */
  unlinkDeveloperIdentity(params: CognitoIdentity.UnlinkDeveloperIdentityInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Unlinks a DeveloperUserIdentifier from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible.You must use AWS Developer credentials to call this API.
   */
  unlinkDeveloperIdentity(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible.This is a public API. You do not need any credentials to call this API.
   */
  unlinkIdentity(params: CognitoIdentity.UnlinkIdentityInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible.This is a public API. You do not need any credentials to call this API.
   */
  unlinkIdentity(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a user pool.You must use AWS Developer credentials to call this API.
   */
  updateIdentityPool(params: CognitoIdentity.IdentityPool, callback?: (err: AWSError, data: CognitoIdentity.IdentityPool) => void): Request<CognitoIdentity.IdentityPool, AWSError>;
  /**
   * Updates a user pool.You must use AWS Developer credentials to call this API.
   */
  updateIdentityPool(callback?: (err: AWSError, data: CognitoIdentity.IdentityPool) => void): Request<CognitoIdentity.IdentityPool, AWSError>;
}
declare namespace CognitoIdentity {
  export type ARNString = string;
  export type AccessKeyString = string;
  export type AccountId = string;
  export interface CognitoIdentityProvider {
    /**
     * The provider name for an Amazon Cognito Identity User Pool. For example, cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789.
     */
    ProviderName?: CognitoIdentityProviderName;
    /**
     * The client ID for the Amazon Cognito Identity User Pool.
     */
    ClientId?: CognitoIdentityProviderClientId;
  }
  export type CognitoIdentityProviderClientId = string;
  export type CognitoIdentityProviderList = CognitoIdentityProvider[];
  export type CognitoIdentityProviderName = string;
  export interface CreateIdentityPoolInput {
    /**
     * A string that you provide.
     */
    IdentityPoolName: IdentityPoolName;
    /**
     * TRUE if the identity pool supports unauthenticated logins.
     */
    AllowUnauthenticatedIdentities?: IdentityPoolUnauthenticated;
    /**
     * Optional key:value pairs mapping provider names to provider app IDs.
     */
    SupportedLoginProviders?: IdentityProviders;
    /**
     * The "domain" by which Cognito will refer to your users. This name acts as a placeholder that allows your backend and the Cognito service to communicate about the developer provider. For the DeveloperProviderName, you can use letters as well as period (.), underscore (_), and dash (-). Once you have set a developer provider name, you cannot change it. Please take care in setting this parameter.
     */
    DeveloperProviderName?: DeveloperProviderName;
    /**
     * A list of OpendID Connect provider ARNs.
     */
    OpenIdConnectProviderARNs?: OIDCProviderList;
    /**
     * An array of Amazon Cognito Identity user pools.
     */
    CognitoIdentityProviders?: CognitoIdentityProviderList;
    /**
     * An array of Amazon Resource Names (ARNs) of the SAML provider for your identity pool.
     */
    SamlProviderARNs?: SAMLProviderList;
  }
  export interface Credentials {
    /**
     * The Access Key portion of the credentials.
     */
    AccessKeyId?: AccessKeyString;
    /**
     * The Secret Access Key portion of the credentials
     */
    SecretKey?: SecretKeyString;
    /**
     * The Session Token portion of the credentials
     */
    SessionToken?: SessionTokenString;
    /**
     * The date at which these credentials will expire.
     */
    Expiration?: DateType;
  }
  export type DateType = Date;
  export interface DeleteIdentitiesInput {
    /**
     * A list of 1-60 identities that you want to delete.
     */
    IdentityIdsToDelete: IdentityIdList;
  }
  export interface DeleteIdentitiesResponse {
    /**
     * An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.
     */
    UnprocessedIdentityIds?: UnprocessedIdentityIdList;
  }
  export interface DeleteIdentityPoolInput {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
  }
  export interface DescribeIdentityInput {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId: IdentityId;
  }
  export interface DescribeIdentityPoolInput {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
  }
  export type DeveloperProviderName = string;
  export type DeveloperUserIdentifier = string;
  export type DeveloperUserIdentifierList = DeveloperUserIdentifier[];
  export type ErrorCode = string;
  export interface GetCredentialsForIdentityInput {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId: IdentityId;
    /**
     * A set of optional name-value pairs that map provider names to provider tokens.
     */
    Logins?: LoginsMap;
    /**
     * The Amazon Resource Name (ARN) of the role to be assumed when multiple roles were received in the token from the identity provider. For example, a SAML-based identity provider. This parameter is optional for identity providers that do not support role customization.
     */
    CustomRoleArn?: ARNString;
  }
  export interface GetCredentialsForIdentityResponse {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
    /**
     * Credentials for the provided identity ID.
     */
    Credentials?: Credentials;
  }
  export interface GetIdInput {
    /**
     * A standard AWS account ID (9+ digits).
     */
    AccountId?: AccountId;
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * A set of optional name-value pairs that map provider names to provider tokens. The available provider names for Logins are as follows:  Facebook: graph.facebook.com Google: accounts.google.com Amazon: www.amazon.com Twitter: api.twitter.com Digits: www.digits.com  
     */
    Logins?: LoginsMap;
  }
  export interface GetIdResponse {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
  }
  export interface GetIdentityPoolRolesInput {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
  }
  export interface GetIdentityPoolRolesResponse {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId?: IdentityPoolId;
    /**
     * The map of roles associated with this pool. Currently only authenticated and unauthenticated roles are supported.
     */
    Roles?: RolesMap;
  }
  export interface GetOpenIdTokenForDeveloperIdentityInput {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
    /**
     * A set of optional name-value pairs that map provider names to provider tokens. Each name-value pair represents a user from a public provider or developer provider. If the user is from a developer provider, the name-value pair will follow the syntax "developer_provider_name": "developer_user_identifier". The developer provider is the "domain" by which Cognito will refer to your users; you provided this domain while creating/updating the identity pool. The developer user identifier is an identifier from your backend that uniquely identifies a user. When you create an identity pool, you can specify the supported logins.
     */
    Logins?: LoginsMap;
    /**
     * The expiration time of the token, in seconds. You can specify a custom expiration time for the token so that you can cache it. If you don't provide an expiration time, the token is valid for 15 minutes. You can exchange the token with Amazon STS for temporary AWS credentials, which are valid for a maximum of one hour. The maximum token duration you can set is 24 hours. You should take care in setting the expiration time for a token, as there are significant security implications: an attacker could use a leaked token to access your AWS resources for the token's duration.
     */
    TokenDuration?: TokenDuration;
  }
  export interface GetOpenIdTokenForDeveloperIdentityResponse {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
    /**
     * An OpenID token.
     */
    Token?: OIDCToken;
  }
  export interface GetOpenIdTokenInput {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId: IdentityId;
    /**
     * A set of optional name-value pairs that map provider names to provider tokens. When using graph.facebook.com and www.amazon.com, supply the access_token returned from the provider's authflow. For accounts.google.com or any other OpenId Connect provider, always include the id_token.
     */
    Logins?: LoginsMap;
  }
  export interface GetOpenIdTokenResponse {
    /**
     * A unique identifier in the format REGION:GUID. Note that the IdentityId returned may not match the one passed on input.
     */
    IdentityId?: IdentityId;
    /**
     * An OpenID token, valid for 15 minutes.
     */
    Token?: OIDCToken;
  }
  export type HideDisabled = boolean;
  export type IdentitiesList = IdentityDescription[];
  export interface IdentityDescription {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
    /**
     * A set of optional name-value pairs that map provider names to provider tokens.
     */
    Logins?: LoginsList;
    /**
     * Date on which the identity was created.
     */
    CreationDate?: DateType;
    /**
     * Date on which the identity was last modified.
     */
    LastModifiedDate?: DateType;
  }
  export type IdentityId = string;
  export type IdentityIdList = IdentityId[];
  export interface IdentityPool {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * A string that you provide.
     */
    IdentityPoolName?: IdentityPoolName;
    /**
     * TRUE if the identity pool supports unauthenticated logins.
     */
    AllowUnauthenticatedIdentities?: IdentityPoolUnauthenticated;
    /**
     * Optional key:value pairs mapping provider names to provider app IDs.
     */
    SupportedLoginProviders?: IdentityProviders;
    /**
     * The "domain" by which Cognito will refer to your users.
     */
    DeveloperProviderName?: DeveloperProviderName;
    /**
     * A list of OpendID Connect provider ARNs.
     */
    OpenIdConnectProviderARNs?: OIDCProviderList;
    /**
     * A list representing an Amazon Cognito Identity User Pool and its client ID.
     */
    CognitoIdentityProviders?: CognitoIdentityProviderList;
    /**
     * An array of Amazon Resource Names (ARNs) of the SAML provider for your identity pool.
     */
    SamlProviderARNs?: SAMLProviderList;
  }
  export type IdentityPoolId = string;
  export type IdentityPoolName = string;
  export interface IdentityPoolShortDescription {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId?: IdentityPoolId;
    /**
     * A string that you provide.
     */
    IdentityPoolName?: IdentityPoolName;
  }
  export type IdentityPoolUnauthenticated = boolean;
  export type IdentityPoolsList = IdentityPoolShortDescription[];
  export type IdentityProviderId = string;
  export type IdentityProviderName = string;
  export type IdentityProviderToken = string;
  export type IdentityProviders = {[key: string]: IdentityProviderId};
  export interface ListIdentitiesInput {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * The maximum number of identities to return.
     */
    MaxResults?: QueryLimit;
    /**
     * A pagination token.
     */
    NextToken?: PaginationKey;
    /**
     * An optional boolean parameter that allows you to hide disabled identities. If omitted, the ListIdentities API will include disabled identities in the response.
     */
    HideDisabled?: HideDisabled;
  }
  export interface ListIdentitiesResponse {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId?: IdentityPoolId;
    /**
     * An object containing a set of identities and associated mappings.
     */
    Identities?: IdentitiesList;
    /**
     * A pagination token.
     */
    NextToken?: PaginationKey;
  }
  export interface ListIdentityPoolsInput {
    /**
     * The maximum number of identities to return.
     */
    MaxResults: QueryLimit;
    /**
     * A pagination token.
     */
    NextToken?: PaginationKey;
  }
  export interface ListIdentityPoolsResponse {
    /**
     * The identity pools returned by the ListIdentityPools action.
     */
    IdentityPools?: IdentityPoolsList;
    /**
     * A pagination token.
     */
    NextToken?: PaginationKey;
  }
  export type LoginsList = IdentityProviderName[];
  export type LoginsMap = {[key: string]: IdentityProviderToken};
  export interface LookupDeveloperIdentityInput {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
    /**
     * A unique ID used by your backend authentication process to identify a user. Typically, a developer identity provider would issue many developer user identifiers, in keeping with the number of users.
     */
    DeveloperUserIdentifier?: DeveloperUserIdentifier;
    /**
     * The maximum number of identities to return.
     */
    MaxResults?: QueryLimit;
    /**
     * A pagination token. The first call you make will have NextToken set to null. After that the service will return NextToken values as needed. For example, let's say you make a request with MaxResults set to 10, and there are 20 matches in the database. The service will return a pagination token as a part of the response. This token can be used to call the API again and get results starting from the 11th match.
     */
    NextToken?: PaginationKey;
  }
  export interface LookupDeveloperIdentityResponse {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
    /**
     * This is the list of developer user identifiers associated with an identity ID. Cognito supports the association of multiple developer user identifiers with an identity ID.
     */
    DeveloperUserIdentifierList?: DeveloperUserIdentifierList;
    /**
     * A pagination token. The first call you make will have NextToken set to null. After that the service will return NextToken values as needed. For example, let's say you make a request with MaxResults set to 10, and there are 20 matches in the database. The service will return a pagination token as a part of the response. This token can be used to call the API again and get results starting from the 11th match.
     */
    NextToken?: PaginationKey;
  }
  export interface MergeDeveloperIdentitiesInput {
    /**
     * User identifier for the source user. The value should be a DeveloperUserIdentifier.
     */
    SourceUserIdentifier: DeveloperUserIdentifier;
    /**
     * User identifier for the destination user. The value should be a DeveloperUserIdentifier.
     */
    DestinationUserIdentifier?: DeveloperUserIdentifier;
    /**
     * The "domain" by which Cognito will refer to your users. This is a (pseudo) domain name that you provide while creating an identity pool. This name acts as a placeholder that allows your backend and the Cognito service to communicate about the developer provider. For the DeveloperProviderName, you can use letters as well as period (.), underscore (_), and dash (-).
     */
    DeveloperProviderName?: DeveloperProviderName;
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId?: IdentityPoolId;
  }
  export interface MergeDeveloperIdentitiesResponse {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
  }
  export type OIDCProviderList = ARNString[];
  export type OIDCToken = string;
  export type PaginationKey = string;
  export type QueryLimit = number;
  export type RoleType = string;
  export type RolesMap = {[key: string]: ARNString};
  export type SAMLProviderList = ARNString[];
  export type SecretKeyString = string;
  export type SessionTokenString = string;
  export interface SetIdentityPoolRolesInput {
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId: IdentityPoolId;
    /**
     * The map of roles associated with this pool. For a given role, the key will be either "authenticated" or "unauthenticated" and the value will be the Role ARN.
     */
    Roles?: RolesMap;
  }
  export type String = string;
  export type TokenDuration = number;
  export interface UnlinkDeveloperIdentityInput {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId: IdentityId;
    /**
     * An identity pool ID in the format REGION:GUID.
     */
    IdentityPoolId?: IdentityPoolId;
    /**
     * The "domain" by which Cognito will refer to your users.
     */
    DeveloperProviderName?: DeveloperProviderName;
    /**
     * A unique ID used by your backend authentication process to identify a user.
     */
    DeveloperUserIdentifier?: DeveloperUserIdentifier;
  }
  export interface UnlinkIdentityInput {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId: IdentityId;
    /**
     * A set of optional name-value pairs that map provider names to provider tokens.
     */
    Logins?: LoginsMap;
    /**
     * Provider names to unlink from this identity.
     */
    LoginsToRemove?: LoginsList;
  }
  export interface UnprocessedIdentityId {
    /**
     * A unique identifier in the format REGION:GUID.
     */
    IdentityId?: IdentityId;
    /**
     * The error code indicating the type of error that occurred.
     */
    ErrorCode?: ErrorCode;
  }
  export type UnprocessedIdentityIdList = UnprocessedIdentityId[];
}
export = CognitoIdentity;
