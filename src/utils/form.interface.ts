export interface IContactForm {
  name: string;
  email: string;
  message: string;
  meName?: string;
  phone?: string;
}
export const defaultContactForm: IContactForm = {
  name: "",
  email: "",
  message: "",
  meName: "",
  phone: "",
};
