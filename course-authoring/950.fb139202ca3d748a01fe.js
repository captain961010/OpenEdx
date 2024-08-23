"use strict";(globalThis.webpackChunk_edx_frontend_app_course_authoring=globalThis.webpackChunk_edx_frontend_app_course_authoring||[]).push([[950],{38349:(e,i,r)=>{r.d(i,{Z:()=>U});var t=r(56549),a=r(48387),n=r(95381),s=r(34926),o=r(41857),l=r(23768),u=r(4138),c=r(77062),d=r(95765),p=r(40113),g=r(36284),h=r(6871),m=r(2652),f=r.n(m),b=r(89526),v=r(2984),y=r(58417),S=r(29519),j=r(87037),x=r(26672),M=r(72079),E=r(56132),T=r(88146),_=r(58408),w=r(79138),L=r(22423),O=r(72999),P=r(26329),q=r(94488);const I=(0,r(93477).vU)({cancel:{id:"course-authoring.pages-resources.app-settings-modal.button.cancel",defaultMessage:"Cancel"},save:{id:"course-authoring.pages-resources.app-settings-modal.button.save",defaultMessage:"Save"},saving:{id:"course-authoring.pages-resources.app-settings-modal.button.saving",defaultMessage:"Saving"},saved:{id:"course-authoring.pages-resources.app-settings-modal.button.saved",defaultMessage:"Saved"},retry:{id:"course-authoring.pages-resources.app-settings-modal.button.retry",defaultMessage:"Retry"},enabled:{id:"course-authoring.pages-resources.app-settings-modal.badge.enabled",defaultMessage:"Enabled"},disabled:{id:"course-authoring.pages-resources.app-settings-modal.badge.disabled",defaultMessage:"Disabled"},errorSavingTitle:{id:"course-authoring.pages-resources.app-settings-modal.save-error.title",defaultMessage:"We couldn't apply your changes."},errorSavingMessage:{id:"course-authoring.pages-resources.app-settings-modal.save-error.message",defaultMessage:"Please check your entries and try again."}});var R=r(67557);function Z(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.push.apply(r,t)}return r}function C(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?Z(Object(r),!0).forEach((function(i){k(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))}))}return e}function k(e,i,r){return(i=function(e){var i=function(e,i){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof i?i:String(i)}(i))in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}const B=e=>{let{formikProps:i,children:r,showForm:t}=e;return r&&(0,R.jsx)(n.Z,{children:t?(0,R.jsx)(b.Fragment,{children:r(i)},"app-enabled"):(0,R.jsx)(b.Fragment,{},"app-disabled")})};B.propTypes={formikProps:f().object.isRequired,showForm:f().bool.isRequired,children:f().func},B.defaultProps={children:null};const A=e=>{let{intl:i,title:r,onClose:t,variant:a,isMobile:n,children:l,footer:u}=e;return(0,R.jsxs)(s.Z,{title:r,isOpen:!0,onClose:t,size:"lg",variant:a,hasCloseButton:n,isFullscreenOnMobile:!0,children:[(0,R.jsx)(s.Z.Header,{children:(0,R.jsx)(s.Z.Title,{"data-testid":"modal-title",children:r})}),(0,R.jsx)(s.Z.Body,{children:l}),(0,R.jsx)(s.Z.Footer,{className:"p-4",children:(0,R.jsxs)(o.Z,{children:[(0,R.jsx)(s.Z.CloseButton,{variant:"tertiary",children:i.formatMessage(I.cancel)}),u]})})]})};A.propTypes={intl:t.gm.isRequired,title:f().string.isRequired,onClose:f().func.isRequired,variant:f().oneOf(["default","dark"]).isRequired,isMobile:f().bool.isRequired,children:f().node.isRequired,footer:f().node},A.defaultProps={footer:null};const N=e=>{let{intl:i,appId:r,title:t,children:a,configureBeforeEnable:n,initialValues:s,validationSchema:o,onClose:m,onSettingsSave:f,enableAppLabel:Z,enableAppHelp:k,learnMoreText:N,enableReinitialize:U,hideAppToggle:D}=e;const{courseId:F}=(0,b.useContext)(q.e),K=(0,v.v9)(w.vc),z=(0,v.v9)(w.Yu),H=(0,b.useRef)(null),[$,V]=(0,b.useState)(!1),G=(0,E.tT)("courseApps",r),X=(0,v.I0)(),J=z===S.eE.IN_PROGRESS?"pending":"default",Y=(0,_.dD)(),Q=Y?"dark":"default";(0,b.useEffect)((()=>{z===S.eE.SUCCESSFUL&&(X((0,L.Yn)({status:""})),m())}),[z]);const W=e=>{let{handleSubmit:i,errors:r}=e;return async e=>{await i(e),Object.keys(r).length>0&&(await V(!0),H?.current.scrollIntoView?.())}},ee=G.documentationLinks?.learnMoreConfiguration&&(0,R.jsx)(l.ZP,{className:"text-primary-500",destination:G.documentationLinks.learnMoreConfiguration,target:"_blank",rel:"noreferrer noopener",children:N});return K===S.eE.SUCCESSFUL?(0,R.jsx)(h.J9,{initialValues:C({enabled:!!G?.enabled},s),validationSchema:y.Ry().shape(C({enabled:y.O7()},o)),onSubmit:async e=>{let i=!0;G.enabled!==e.enabled&&(i=await X((0,O.JU)(F,G.id,e.enabled))),f&&(i=i&&await f(e)),await V(!i),!i&&H?.current.scrollIntoView()},enableReinitialize:U,children:e=>(0,R.jsx)(u.ZP,{onSubmit:W(e),children:(0,R.jsxs)(A,{title:t,isOpen:!0,onClose:m,variant:Q,isMobile:Y,isFullscreenOnMobile:!0,intl:i,footer:(0,R.jsx)(c.Z,{labels:{default:i.formatMessage(I.save),pending:i.formatMessage(I.saving),complete:i.formatMessage(I.saved)},state:J,onClick:W(e)}),children:[$&&(0,R.jsxs)(d.Z,{variant:"danger",icon:g.Z,ref:H,children:[(0,R.jsx)(d.Z.Heading,{children:e.errors.enabled?.title||i.formatMessage(I.errorSavingTitle)}),e.errors.enabled?.message||i.formatMessage(I.errorSavingMessage)]}),!D&&(0,R.jsx)(x.Z,{id:`enable-${r}-toggle`,name:"enabled",onChange:i=>e.handleChange(i),onBlur:e.handleBlur,checked:e.values.enabled,label:(0,R.jsxs)("div",{className:"d-flex align-items-center",children:[Z,e.values.enabled&&(0,R.jsx)(p.Z,{className:"ml-2",variant:"success","data-testid":"enable-badge",children:i.formatMessage(I.enabled)})]}),helpText:(0,R.jsxs)("div",{children:[(0,R.jsx)("p",{children:k}),(0,R.jsx)("span",{className:"py-3",children:ee})]})}),(e.values.enabled||n)&&a&&(0,R.jsx)(P.Z,{marginAdj:{default:0,sm:0}}),(0,R.jsx)(B,{formikProps:e,showForm:e.values.enabled||n,children:a})]})})}):(0,R.jsxs)(A,{intl:i,title:t,isOpen:!0,onClose:m,size:"sm",variant:Q,isMobile:Y,isFullscreenOnMobile:!0,children:[K===S.eE.IN_PROGRESS&&(0,R.jsx)(M.Z,{}),K===S.eE.FAILED&&(0,R.jsx)(j.Z,{}),K===S.eE.DENIED&&(0,R.jsx)(T.Z,{})]})};N.propTypes={intl:t.gm.isRequired,title:f().string.isRequired,appId:f().string.isRequired,children:f().func,onSettingsSave:f().func,initialValues:f().shape({}),validationSchema:f().shape({}),onClose:f().func.isRequired,enableAppLabel:f().string.isRequired,enableAppHelp:f().string.isRequired,learnMoreText:f().string.isRequired,configureBeforeEnable:f().bool,enableReinitialize:f().bool,hideAppToggle:f().bool},N.defaultProps={children:null,onSettingsSave:null,initialValues:{},validationSchema:{},configureBeforeEnable:!1,enableReinitialize:!1,hideAppToggle:!1};const U=(0,a.Z)(N)},30950:(e,i,r)=>{r.r(i),r.d(i,{default:()=>re});var t=r(89526),a=r(2984),n=r(53059),s=r(43103),o=r(99912),l=r(56549),u=r(48387),c=r(2652),d=r.n(c),p=r(58417),g=r(77026),h=r(56132),m=r(76079),f=r(84790),b=r(75879),v=r(51774),y=r(65391),S=r(87267);const j={googleMeet:b.Z,microsoftTeams:v.Z,zoom:y.Z,bigBlueButton:S.Z},x={zoom:"Zoom",big_blue_button:"BigBlueButton"},M={free:"Free",commercial:"Commercial/self-hosted"};function E(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.push.apply(r,t)}return r}function T(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?E(Object(r),!0).forEach((function(i){_(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))}))}return e}function _(e,i,r){return(i=function(e){var i=function(e,i){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof i?i:String(i)}(i))in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}(0,m.LE)(["STUDIO_BASE_URL"],"Course Apps API service");const w=(0,m.iE)().STUDIO_BASE_URL,L=`${w}/api/course_live/providers`,O=`${w}/api/course_live/course`;function P(e){return!e||Object.keys(e).length<1?{}:{consumerKey:e.lti_1p1_client_key,consumerSecret:e.lti_1p1_client_secret,launchUrl:e.lti_1p1_launch_url,launchEmail:e.lti_config?.additional_parameters?.custom_instructor_email,tierType:e.tierType}}function q(e){let i;return"big_blue_button"===e.provider_type&&(i=!0===e.free_tier?M.free:M.commercial),{enabled:e.enabled,piiSharingAllowed:e.pii_sharing_allowed,appConfig:T({id:e.provider_type},P(T(T({},e.lti_configuration),{},{tierType:i})))}}function I(e){const i={};return e.consumerKey&&(i.lti_1p1_client_key=e.consumerKey),e.consumerSecret&&(i.lti_1p1_client_secret=e.consumerSecret),e.launchUrl&&(i.lti_1p1_launch_url=e.launchUrl),"zoom"!==e?.provider&&"Free"===e.tierType||(i.lti_config={},e.launchEmail&&(i.lti_config.additional_parameters={custom_instructor_email:e.launchEmail})),Object.keys(i).length>0&&(i.version="lti_1p1"),{enabled:e?.enabled||!1,lti_configuration:Object.keys(i).length?i:void 0,provider_type:e?.provider||"zoom",pii_sharing_allowed:e?.piiSharingEnable||!1,free_tier:"zoom"!==e?.provider&&Boolean("Free"===e.tierType)}}var R=r(96184),Z=r(29519);const C=["appConfig"],k=["appConfig"];function B(e,i){if(null==e)return{};var r,t,a=function(e,i){if(null==e)return{};var r,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],i.indexOf(r)>=0||(a[r]=e[r]);return a}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],i.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function A(e){let{appConfig:i}=e,r=B(e,C);return async e=>{e((0,h.mS)({modelType:"liveAppConfigs",model:i})),e((0,R.jJ)(r))}}function N(e){return async i=>{i((0,R.Nf)({status:Z.eE.IN_PROGRESS}));try{await i(function(e){return async i=>{const{activeAppId:r,selectedAppId:t,apps:a}=await async function(e){const{data:i}=await(0,f.kj)().get(`${L}/${e}/`);return function(e){const i=Object.entries(e.providers.available).map((e=>{let[i,r]=e;return{id:i,featureIds:r.features,name:r.name,piiSharing:r.pii_sharing,hasFreeTier:r.has_free_tier}}));return{activeAppId:e.providers.active,selectedAppId:e.providers.active,apps:i}}(i)}(e);i((0,h.cD)({modelType:"liveApps",models:a})),i((0,R.jJ)({activeAppId:r,selectedAppId:t,appIds:a.map((e=>e.id))}))}}(e)),await i(function(e){return async i=>{const r=await async function(e){const{data:i}=await(0,f.kj)().get(`${O}/${e}/`);return q(i)}(e);i(A(r))}}(e))}catch(e){e.response&&403===e.response.status?i((0,R.Nf)({status:Z.eE.DENIED})):i((0,R.Nf)({status:Z.eE.FAILED}))}}}var U=r(38349),D=r(72079);const F=(0,r(93477).vU)({heading:{id:"authoring.pagesAndResources.live.enableLive.heading",defaultMessage:"Configure Live",description:"Heading for live configuration"},enableLiveLabel:{id:"authoring.pagesAndResources.live.enableLive.label",defaultMessage:"Live",description:"Title for configuration"},enableLiveHelp:{id:"authoring.pagesAndResources.live.enableLive.help",defaultMessage:"Schedule meetings and conduct live course sessions with learners.",description:"Tells the purpose of live configuration"},enableLiveLink:{id:"authoring.pagesAndResources.live.enableLive.link",defaultMessage:"Learn more about live",description:"Link text that tells the user to learn about the live"},saveButton:{id:"authoring.discussions.saveButton",defaultMessage:"Save",description:"Button allowing the user to submit their discussion configuration."},savingButton:{id:"authoring.discussions.savingButton",defaultMessage:"Saving",description:"Button label when the discussion configuration is being submitted."},savedButton:{id:"authoring.discussions.savedButton",defaultMessage:"Saved",description:"Button label when the discussion configuration has been successfully submitted."},selectProvider:{id:"authoring.live.selectProvider",defaultMessage:"Select a video conferencing tool",description:""},formInstructions:{id:"authoring.live.formInstructions",defaultMessage:"Complete the fields below to set up your video conferencing tool.",description:"Instruction for configure the video conferencing tool."},consumerKey:{id:"authoring.live.consumerKey",defaultMessage:"Consumer Key",description:"Label for the Consumer Key field."},consumerKeyRequired:{id:"authoring.live.consumerKey.required",defaultMessage:"Consumer key is a required field",description:"Tells the user that the Consumer Key field is required and must have a value."},consumerSecret:{id:"authoring.live.consumerSecret",defaultMessage:"Consumer Secret",description:"Label for the Consumer Secret field."},consumerSecretRequired:{id:"authoring.live.consumerSecret.required",defaultMessage:"Consumer secret is a required field",description:"Tells the user that the Consumer Secret field is required and must have a value."},launchUrl:{id:"authoring.live.launchUrl",defaultMessage:"Launch URL",description:"Label for the Launch URL field."},launchUrlRequired:{id:"authoring.live.launchUrl.required",defaultMessage:"Launch URL is a required field",description:"Tells the user that the Launch URL field is required and must have a value."},launchEmail:{id:"authoring.live.launchEmail",defaultMessage:"Launch Email",description:"Label for the Launch Email field."},launchEmailRequired:{id:"authoring.live.launchEmail.required",defaultMessage:"Launch Email is a required field",description:"Tells the user that the Launch Email field is required and must have a value."},providerHelperText:{id:"authoring.live.provider.helpText",defaultMessage:"This configuration will require sharing username and emails of learners and the course team with {providerName}.",description:"Tells the user that sharing username and email is required for configuration"},requestPiiSharingEnable:{id:"authoring.live.requestPiiSharingEnable",defaultMessage:"This configuration will require sharing usernames and emails of learners and the course team with {provider}. To access the LTI configuration for {provider}, please request your edX project coordinator to get PII sharing enabled for this course.",description:"Tells the user that request edx project coordinator to enable the PII sharing to access the LTI configuration for a provider."},general:{id:"authoring.live.appDocInstructions.documentationLink",defaultMessage:"General documentation",description:"Application Document Instructions message for documentation link"},accessibility:{id:"authoring.live.appDocInstructions.accessibilityDocumentationLink",defaultMessage:"Accessibility documentation",description:"Application Document Instructions message for accessibility link"},configuration:{id:"authoring.live.appDocInstructions.configurationLink",defaultMessage:"Configuration documentation",description:"Application Document Instructions message for configurations link"},learnMore:{id:"authoring.live.appDocInstructions.learnMoreLink",defaultMessage:"Learn more about {providerName}",description:"Application Document Instructions message for learn more links"},linkTextHeading:{id:"authoring.live.appDocInstructions.linkTextHeading",defaultMessage:"External help and documentation",description:"External help and documentation heading"},linkText:{id:"authoring.live.appDocInstructions.linkText",defaultMessage:"{link}",description:"link"},"appName-zoom":{id:"authoring.live.appName-yellowdig",defaultMessage:"Zoom",description:"The name of the Zoom app."},"appName-googleMeet":{id:"authoring.live.appName-googleMeet",defaultMessage:"Google Meet",description:"The name of the Google Meet app."},"appName-microsoftTeams":{id:"authoring.live.appName-microsoftTeams",defaultMessage:"Microsoft Teams",description:"The name of the Microsoft Teams app."},"appName-bigBlueButton":{id:"authoring.live.appName-bigBlueButton",defaultMessage:"BigBlueButton",description:"The name of the Big Blue Button Teams app."},requestPiiSharingEnableForBbb:{id:"authoring.live.requestPiiSharingEnableForBbb",defaultMessage:"This configuration will require sharing usernames of learners and the course team with {provider}.",description:"Tells the user that they require sharing usernames with the provider to use this feature"},piiSharingEnableHelpTextBbb:{id:"authoring.live.piiSharingEnableHelpText",defaultMessage:"To enable this feature, contact your edX support team to enable PII sharing for this course.",description:"Tells the user that request edx project coordinator to enable the PII sharing to access the LTI configuration for a provider."},freePlanMessage:{id:"authoring.live.freePlanMessage",defaultMessage:"The free plan is pre-configured, and no additional configurations are required. By selecting the free plan, you are agreeing to Blindside Networks",description:"Tells user that free plans requires no additional configurations"},privacyPolicy:{id:"authoring.live.privacyPolicy",defaultMessage:"Privacy Policy.",description:"The text of privacy policy hyperlink for free plan"}});var K=r(4985),z=r(67557);const H=e=>{let{intl:i,values:r}=e;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("p",{className:"pb-2",children:i.formatMessage(F.formInstructions)}),(0,z.jsx)(K.Z,{name:"consumerKey",value:r.consumerKey,floatingLabel:i.formatMessage(F.consumerKey),className:"pb-1",type:"input"}),(0,z.jsx)(K.Z,{name:"consumerSecret",value:r.consumerSecret,floatingLabel:i.formatMessage(F.consumerSecret),className:"pb-1",type:"password"}),(0,z.jsx)(K.Z,{name:"launchUrl",value:r.launchUrl,floatingLabel:i.formatMessage(F.launchUrl),className:"pb-1",type:"input"})]})};H.propTypes={intl:l.gm.isRequired,values:d().shape({consumerKey:d().string,consumerSecret:d().string,launchUrl:d().string,launchEmail:d().string}).isRequired};const $=(0,u.Z)(H),V=e=>{let{intl:i,values:r}=e;return(0,z.jsx)(z.Fragment,{children:r.piiSharingEnable?(0,z.jsxs)(z.Fragment,{children:[(r.piiSharingEmail||r.piiSharingUsername)&&(0,z.jsx)("p",{"data-testid":"helper-text",children:i.formatMessage(F.providerHelperText,{providerName:x[r.provider]})}),(0,z.jsx)($,{values:r}),(0,z.jsx)(K.Z,{name:"launchEmail",value:r.launchEmail,floatingLabel:i.formatMessage(F.launchEmail),type:"input"})]}):(0,z.jsx)("p",{"data-testid":"request-pii-sharing",children:i.formatMessage(F.requestPiiSharingEnable,{provider:x[r.provider]})})})};V.propTypes={intl:l.gm.isRequired,values:d().shape({consumerKey:d().string,consumerSecret:d().string,launchUrl:d().string,launchEmail:d().string,provider:d().string,piiSharingEmail:d().bool,piiSharingUsername:d().bool,piiSharingEnable:d().bool}).isRequired};const G=(0,u.Z)(V);var X=r(54877),J=r(4138),Y=r(23768),Q=r(26329);const W=e=>{let{intl:i,values:r,setFieldValue:a}=e;const[n,s]=(0,t.useState)(r.tierType);(0,t.useEffect)((()=>{s(r.tierType)}),[r.tierType]);const o=(0,h.tT)("liveApps","big_blue_button"),l=!r.piiSharingEnable;return(0,z.jsxs)(z.Fragment,{children:[l?(0,z.jsx)("p",{"data-testid":"request-pii-sharing",children:i.formatMessage(F.requestPiiSharingEnableForBbb,{provider:x[r.provider]})}):(0,z.jsx)("p",{"data-testid":"helper-text",children:i.formatMessage(F.providerHelperText,{providerName:x[r.provider]})}),(0,z.jsxs)(J.ZP.Group,{controlId:"bbs-settings","data-testid":"plansDropDown",children:[(0,z.jsx)(J.ZP.Label,{as:"planSelector",className:"h6",children:(0,z.jsx)(X.Z,{id:"authoring.live.bbb.selectPlan.label",defaultMessage:"Select a plan",description:"Label for bbb plan selection"})}),(0,z.jsx)(J.ZP.Control,{as:"select",name:"tierType",value:n,onChange:e=>{s(e.target.value),a("tierType",e.target.value)},disabled:l,children:function(){const e=["Select",M.commercial];return o.hasFreeTier&&e.push(M.free),e.map((e=>(0,z.jsx)("option",{value:e,"data-testid":e,children:e},e)))}()})]}),(0,z.jsx)(Y.ZP,{destination:(0,m.iE)().BBB_LEARN_MORE_URL,target:"_blank",rel:"noopener noreferrer",showLaunchIcon:!0,className:"text-primary-500 pt-2",children:i.formatMessage(F.learnMore,{providerName:"plans"})}),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Q.Z,{thick:!0,marginAdj:{default:0,sm:2}}),l?(0,z.jsx)("p",{"data-testid":"help-request-pii-sharing",children:i.formatMessage(F.piiSharingEnableHelpTextBbb)}):(0,z.jsxs)(z.Fragment,{children:[n===M.commercial&&(0,z.jsx)($,{values:r}),n===M.free&&(0,z.jsxs)("span",{"data-testid":"free-plan-message",children:[i.formatMessage(F.freePlanMessage),(0,z.jsx)(Y.ZP,{destination:"https://bigbluebutton.org/privacy-policy/",target:"_blank",rel:"noopener noreferrer",showLaunchIcon:!0,className:"text-gray-700 ml-1",children:i.formatMessage(F.privacyPolicy)})]})]})]})]})};W.propTypes={intl:l.gm.isRequired,values:d().shape({consumerKey:d().string,consumerSecret:d().string,launchUrl:d().string,launchEmail:d().string,provider:d().string,piiSharingEmail:d().bool,piiSharingUsername:d().bool,piiSharingEnable:d().bool,tierType:d().string}).isRequired,setFieldValue:d().func.isRequired};const ee=(0,u.Z)(W),ie=e=>{let{intl:i,onClose:r}=e;const l=(0,a.I0)(),u=(0,a.v9)((e=>e.courseDetail.courseId)),c=(0,a.v9)((e=>e.live.appIds)),{piiSharingAllowed:d,selectedAppId:m,enabled:b,status:v}=(0,a.v9)((e=>e.live)),y=(0,h.tT)("liveAppConfigs",m),S=(0,h.tT)("liveApps",m),x={enabled:b||!1,consumerKey:y?.consumerKey||"",consumerSecret:y?.consumerSecret||"",launchUrl:y?.launchUrl||"",launchEmail:y?.launchEmail||"",provider:m||"zoom",piiSharingEnable:d||!1,piiSharingUsername:S?.piiSharing?.username||!1,piiSharingEmail:S?.piiSharing?.email||!1,tierType:y?.tierType||""},E={enabled:p.O7(),consumerKey:p.Z_().when(["provider","tierType"],{is:(e,i)=>"zoom"===e||"big_blue_button"===e&&i===M.commercial,then:p.Z_().required(i.formatMessage(F.consumerKeyRequired))}),consumerSecret:p.Z_().when(["provider","tierType"],{is:(e,i)=>"zoom"===e||"big_blue_button"===e&&i===M.commercial,then:p.Z_().notRequired(i.formatMessage(F.consumerSecretRequired))}),launchUrl:p.Z_().when(["provider","tierType"],{is:(e,i)=>"zoom"===e||"big_blue_button"===e&&i===M.commercial,then:p.Z_().required(i.formatMessage(F.launchUrlRequired))}),launchEmail:p.Z_()};return(0,t.useEffect)((()=>{l(N(u))}),[u]),(0,z.jsx)(U.Z,{appId:"live",title:i.formatMessage(F.heading),enableAppHelp:i.formatMessage(F.enableLiveHelp),enableAppLabel:i.formatMessage(F.enableLiveLabel),learnMoreText:i.formatMessage(F.enableLiveLink),onClose:r,initialValues:x,validationSchema:E,onSettingsSave:async e=>{await l(function(e,i){return async r=>{r((0,R.Xl)({status:Z.eE.IN_PROGRESS}));try{const t=await async function(e,i){const{data:r}=await(0,f.kj)().post(`${O}/${e}/`,I(i));return q(r)}(e,i);r(A(t)),r((0,R.Xl)({status:Z.eE.SUCCESSFUL})),g.m8.push(`/course/${e}/pages-and-resources/`)}catch(e){e.response&&403===e.response.status?(r((0,R.Xl)({status:Z.eE.DENIED})),r((0,R.Nf)({status:Z.eE.DENIED}))):r((0,R.Xl)({status:Z.eE.FAILED}))}}}(u,e))},configureBeforeEnable:!0,enableReinitialize:!0,children:e=>{let{values:r,setFieldValue:t}=e;return v===Z.eE.IN_PROGRESS?(0,z.jsx)(D.Z,{}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("h4",{className:"my-3",children:i.formatMessage(F.selectProvider)}),(0,z.jsx)(s.Z.Set,{type:"checkbox",value:r.provider,onChange:e=>((e,i,r)=>{l(function(e){return async i=>{const r=q(I(e)),{appConfig:t}=r,a=B(r,k);i((0,h.QB)({modelType:"liveAppConfigs",model:t})),i((0,R.jJ)(a))}}(r)),l((0,R.Ci)({appId:e})),i("provider",e)})(e.target.value,t,r),name:"provider",columns:3,className:"mb-3",children:c.map((e=>(0,z.jsx)(s.Z,{value:e,type:"checkbox",children:(0,z.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[(0,z.jsx)(o.Z,{src:j[`${(0,n.camelCase)(e)}`],alt:e}),(0,z.jsx)("span",{children:i.formatMessage(F[`appName-${(0,n.camelCase)(e)}`])})]})},e)))}),"zoom"===r.provider?(0,z.jsx)(G,{values:r}):(0,z.jsx)(ee,{values:r,setFieldValue:t})]})}})};ie.propTypes={intl:l.gm.isRequired,onClose:d().func.isRequired};const re=(0,u.Z)(ie)}}]);
//# sourceMappingURL=950.fb139202ca3d748a01fe.js.map