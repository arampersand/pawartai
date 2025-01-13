import themes from "daisyui/src/theming/themes";

const config = {
  // REQUIRED
  appName: "PawArtAI",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Descubre la magia de transformar a tus mascotas en aventureros exploradores con nuestra aplicación de generación de imágenes. Desde las majestuosas 7 maravillas del mundo hasta la diversión de Disneyworld, la serenidad de la playa o la inmensidad del espacio como astronautas, nuestra IA crea imágenes asombrosas que capturan a tus mascotas en escenarios extraordinarios.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "pawartai.com",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1QfpkbHOjKJMIr06iiuRPpuG"
            : "price_1QfpoPHOjKJMIr066vNBv5DA",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Explorer Starter",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Begin your pet's journey with magical transformations.",
        // The price you want to display, the one user will be charged on Stripe.
        price: 10,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 20,
        features: [
          { name: "5 AI Image Transformations" },
          { name: "4 Adventure Backgrounds" },
          { name: "HD Quality Downloads" },
          { name: "Basic Photo Editing Tools" },
          { name: "24h Support via Email" },
        ],
      },
      {
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1QfplwHOjKJMIr06r5Cbc9b0"
            : "price_1QfpoPHOjKJMIr066vNBv5DA",
        name: "Adventurer Pro",
        description: "Unlock more epic adventures and destinations for your pet.",
        price: 15,
        priceAnchor: 30,
        features: [
          { name: "15 AI Image Transformations" },
          { name: "All Adventure Backgrounds" },
          { name: "4K Ultra HD Downloads" },
          { name: "Advanced Photo Editing Tools" },
          { name: "Priority 24/7 Support" },
          { name: "Exclusive Monthly Backgrounds" },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `pawartai <noreply@casadepaw.com>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `ampersand at pawartai <help@casadepaw.com>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "help@casadepaw.com",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "help@casadepaw.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "black",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: themes["black"]["primary"],
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/api/auth/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
};

export default config;
