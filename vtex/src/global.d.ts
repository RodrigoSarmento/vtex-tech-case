import { AxiosRequestConfig } from 'axios';

declare global {
  interface IButton {
    outlined?: boolean;
    backgroundColor?: string;
    outlineColor?: string;
    textColor?: string;
  }

  type TSubjectTag = 'orders' | 'payments' | 'catalog' | 'others';

  interface IField {
    name: string;
    zendeskId: number;
    type: 'number' | 'boolean' | 'dropdown' | 'image';
    dropDownItems?: IDropDownItem[];
    parent: TSubjectTag;
  }

  interface IFieldError extends IFieldInput {
    errorMessage: string;
  }

  interface IDropDownItem {
    name: string;
    tag: string;
  }

  interface IFieldInput extends IField {
    value: any;
  }

  interface ISubject {
    name: string;
    tag: TSubjectTag;
    fields: IField[];
  }

  interface IRequestConfig extends AxiosRequestConfig {
    method: Method;
    url: string;
  }

  interface IImage {
    token: string;
    url: string;
  }

  interface IToast {
    id: string;
    type: 'info' | 'warning' | 'error' | 'success';
    text: string;
  }

  interface ITicketBody {
    comment: { body: string };
    priority: 'urgent' | 'low' | 'ICustomFieldZendesk' | 'high';
    custom_fields: ICustomFieldTicket[];
  }

  interface ICustomFieldZendesk {
    id: number;
    value: string | number | string[];
  }

  interface ITicketData {
    ticket: ITicketBody;
  }

  interface ITicketResponse {
    ticket: ITicket;
  }

  interface ITicket {
    url: string;
    id: number;
    external_id: any;
    created_at: string;
    updated_at: string;
    type: any;
    subject: string;
    raw_subject: string;
    description: string;
    priority: string;
    status: string;
    recipient: any;
    requester_id: number;
    submitter_id: number;
    assignee_id: number;
    organization_id: number;
    group_id: number;
    collaborator_ids: any[];
    follower_ids: any[];
    email_cc_ids: any[];
    forum_topic_id: any;
    problem_id: any;
    has_incidents: boolean;
    is_public: boolean;
    due_at: any;
    tags: any[];
    custom_fields: ICustomField[];
    satisfaction_rating: any;
    sharing_agreement_ids: any[];
    custom_status_id: number;
    fields: ICustomField[];
    followup_ids: any[];
    ticket_form_id: number;
    brand_id: number;
    allow_channelback: boolean;
    allow_attachments: boolean;
    from_messaging_channel: boolean;
  }

  export interface ICustomField {
    id: number;
    value?: string;
  }
}

export {};
