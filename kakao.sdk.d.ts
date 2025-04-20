interface Window {
  Kakao: KakaoStatic;
}
export interface KakaoStatic {
  /** SDK version */
  VERSION: string;
  /** Clean up all initialized submodules */
  cleanup(): void;
  /** Initialize SDK with your app key */
  init(appKey: string): void;
  /** Check if SDK is already initialized */
  isInitialized(): boolean;

  /** Authentication methods */
  Auth: {
    authorize(options: AuthAuthorizeOptions): Promise<AuthStatus>;
    authorizeForCert(options: AuthCertOptions): void;
    getAccessToken(): string | null;
    getAppKey(): string;
    setAccessToken(token: string, remember?: boolean): void;
    getStatusInfo(): Promise<AuthStatus>;
    logout(): Promise<void>;
    createShippingAddress(
      options: ShippingAddressOptions,
    ): Promise<ShippingAddressResult>;
    selectShippingAddress(
      options: ShippingAddressOptions,
    ): Promise<ShippingAddressResult>;
    updateShippingAddress(
      options: ShippingAddressOptions,
    ): Promise<ShippingAddressResult>;
    cleanup(): void;
  };

  /** Low-level API request */
  API: {
    request<T = unknown>(options: {
      url: string;
      data?: Record<string, unknown>;
      files?: File[];
      file?: File;
    }): Promise<T>;
    cleanup(): void;
  };

  /** KakaoTalk Sharing */
  Share: {
    cleanup(): void;
    /** Create a custom share button */
    createCustomButton(options: ShareCustomButtonOptions): void;
    /** Create a default share button (feed, list, commerce, etc.) */
    createDefaultButton(options: ShareTemplateButtonOptions): void;
    /** Create a scrap share button */
    createScrapButton(options: ShareScrapButtonOptions): void;
    /** Send a custom template directly */
    sendCustom(options: ShareCustomOptions): void;
    /** Send a default template directly */
    sendDefault(options: ShareTemplateSendOptions): void;
    /** Send a scrap template directly */
    sendScrap(options: ShareScrapOptions): void;
    deleteImage(options: { imageUrl: string }): Promise<void>;
    scrapImage(options: { imageUrl: string }): Promise<string>;
    uploadImage(options: { file: File }): Promise<string>;
  };

  /** KakaoTalk Channel operations */
  Channel: {
    addChannel(options: { channelPublicId: string; lang?: string }): void;
    chat(options: { channelPublicId: string; lang?: string }): void;
    cleanup(): void;
    createAddChannelButton(options: ChannelAddButtonOptions): void;
    createChatButton(options: ChannelChatButtonOptions): void;
    followChannel(options: { channelPublicId: string }): Promise<void>;
  };

  /** Kakao Navi share */
  Navi: {
    start(options: NaviStartOptions): void;
  };

  /** Friend Picker */
  Picker: {
    select(options: PickerSelectOptions): Promise<PickerResult>;
    selectChat(options: PickerSelectOptions): Promise<PickerResult>;
    selectFriend(options: PickerSelectOptions): Promise<PickerResult>;
    selectFriends(options: PickerSelectOptions): Promise<PickerResult>;
    cleanup(): void;
  };

  /** Certificate (Cert) operations */
  Cert: {
    identify(options: AuthCertOptions): void;
    cleanup(): void;
  };
}

declare global {
  interface Window {
    /** Kakao JavaScript SDK */
    Kakao: KakaoStatic;
    /** Optional async init callback */
    kakaoAsyncInit?: () => void;
  }
}

/** Common options for sharing templates */
export interface ShareCommonOptions {
  installTalk?: boolean;
  throughTalk?: boolean;
  extras?: Record<string, unknown>;
  serverCallbackArgs?: Record<string, unknown>;
}

/** Options for custom template sharing */
export interface ShareCustomOptions extends ShareCommonOptions {
  templateId: number;
  templateArgs?: Record<string, unknown>;
}

/** Options for creating a custom share button */
export interface ShareCustomButtonOptions extends ShareCustomOptions {
  container: HTMLElement | string;
}

/** Options for default template button */
export interface ShareTemplateButtonOptions extends ShareCommonOptions {
  objectType: "feed" | "list" | "commerce" | "location" | "calendar" | "text";
  content: Record<string, unknown>;
  container: HTMLElement | string;
  buttonTitle?: string;
  buttons?: Array<Record<string, unknown>>;
  itemContent?: Record<string, unknown>;
  social?: Record<string, unknown>;
}

/** Options for sending default template */
export interface ShareTemplateSendOptions
  extends Omit<ShareTemplateButtonOptions, "container"> {}

/** Options for scrap template */
export interface ShareScrapOptions extends ShareCommonOptions {
  requestUrl: string;
  templateId?: number;
  templateArgs?: Record<string, unknown>;
}

/** Options for scrap template button */
export interface ShareScrapButtonOptions extends ShareScrapOptions {
  container: HTMLElement | string;
}

/** Shipping address options */
export interface ShippingAddressOptions {
  addressId?: string;
  returnUrl?: string;
  installTalk?: boolean;
  forceMobileLayout?: boolean;
  enableBackButton?: boolean;
}

/** Result from shipping address APIs */
export type ShippingAddressResult = Record<string, unknown>;

/** Options for Auth.authorize */
export interface AuthAuthorizeOptions {
  redirectUri: string;
  scope?: string;
  state?: string;
  isPopup?: boolean;
  throughTalk?: boolean;
  throughSyncplugin?: boolean;
  serviceTerms?: string;
  channelPublicId?: string;
  deviceType?: string;
  loginHint?: string;
  prompt?: string;
}

/** Options for Auth.authorizeForCert */
export interface AuthCertOptions {
  redirectUri: string;
  settleId: string;
  signData: string;
  identifyItems?: string[];
  state?: string;
}

/** Options for Navi.start */
export interface NaviStartOptions {
  name: string;
  x: number;
  y: number;
  guideId?: number;
  coordType?: string;
  vehicleType?: number;
  rpflag?: string;
  cid?: string;
  returnUri?: string;
  viaPoints?: Array<{ x: number; y: number }>;
}

/** Options for friend picker */
export interface PickerSelectOptions {
  returnUrl?: string;
  friendsParams?: Record<string, unknown>;
  chatParams?: Record<string, unknown>;
  selectionType?: "chat" | "chatMember";
  chatFilters?: string[];
  title?: string;
  enableSearch?: boolean;
  disableSelectOptions?: Record<string, unknown>;
  displayAllProfile?: boolean;
  maxPickableCount?: number;
  minPickableCount?: number;
  showPickedFriend?: boolean;
  enableBackButton?: boolean;
}

/** Result from friend picker */
export type PickerResult = Record<string, unknown>;

/** Authentication status returned by Auth.authorize / getStatusInfo */
export interface AuthStatus {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
  refresh_token_expires_in?: number;
  scope?: string;
  token_type: string;
  [key: string]: unknown;
}
