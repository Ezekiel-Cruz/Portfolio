declare module "@hcaptcha/react-hcaptcha" {
  import { ForwardRefExoticComponent, RefAttributes } from "react";
  type HCaptchaProps = {
    sitekey: string;
    onVerify?: (token: string, ekey?: string) => void;
    onExpire?: () => void;
    onError?: (err: unknown) => void;
    reCaptchaCompat?: boolean;
    size?: "normal" | "compact" | "invisible";
    theme?: "light" | "dark";
    tabindex?: number;
    languageOverride?: string;
  };
  type HCaptchaComponent = ForwardRefExoticComponent<HCaptchaProps & RefAttributes<unknown>>;
  const HCaptcha: HCaptchaComponent;
  export default HCaptcha;
}