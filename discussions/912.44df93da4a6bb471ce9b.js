"use strict";(globalThis.webpackChunk_edx_frontend_app_discussions=globalThis.webpackChunk_edx_frontend_app_discussions||[]).push([[912],{90912:(e,s,n)=>{n.r(s),n.d(s,{default:()=>b});var t=n(89526),a=n(2652),o=n.n(a),r=n(59458),d=n(25180),i=n(86009),l=n(29519),m=n(62514),c=n(1987),h=n(1331),p=n(33866),x=n(45570),g=n(85002),u=n(67557);const f=e=>{let{endorsed:s}=e;const n=(0,r.Z)(),[a,o]=(0,t.useState)(!1),{isClosed:f}=(0,t.useContext)(x.c),b=(0,m.DD)(),{endorsedCommentsIds:C,unEndorsedCommentsIds:j,hasMorePages:k,isLoading:N,handleLoadMoreResponses:v}=(0,h.PU)(s),y=(0,t.useCallback)((()=>{o(!0)}),[]),D=(0,t.useCallback)((()=>{o(!1)}),[]),S=(0,t.useCallback)(((e,s)=>(0,u.jsx)("div",{className:"comment-line mx-4 my-14px text-gray-700 font-style",role:"heading","aria-level":"2",children:n.formatMessage(e,{num:s})})),[]),R=(0,t.useCallback)((function(e){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,u.jsxs)("div",{className:"mx-4",role:"list",children:[e.map((s=>(0,u.jsx)(g.sv,{commentId:s,marginBottom:(0,c.Yx)(e,s)},s))),k&&!N&&!s&&(0,u.jsx)(d.ZP,{onClick:v,variant:"link",block:"true",className:"px-4 mt-3 border-0 line-height-24 py-0 mb-2 font-style font-weight-500 font-size-14","data-testid":"load-more-comments",children:n.formatMessage(p.Z.loadMoreResponses)}),N&&!s&&(0,u.jsx)("div",{className:"mb-2 mt-3 d-flex justify-content-center",children:(0,u.jsx)(i.Z,{animation:"border",variant:"primary",className:"spinner-dimentions"})})]})}),[k,N,v]);return(0,u.jsx)(u.Fragment,{children:(k&&N||!N)&&(0,u.jsxs)(u.Fragment,{children:[C.length>0&&(0,u.jsxs)(u.Fragment,{children:[S(p.Z.endorsedResponseCount,C.length),s===l.mf.DISCUSSION?R(C,!0):R(C,!1)]}),s!==l.mf.ENDORSED&&(0,u.jsxs)(u.Fragment,{children:[S(p.Z.responseCount,j.length),0===j.length&&(0,u.jsx)("br",{}),R(j,!1),b&&!!j.length&&!f&&(0,u.jsxs)("div",{className:"mx-4",children:[!a&&(0,u.jsx)(d.ZP,{variant:"plain",block:"true",className:"card mb-4 px-0 border-0 py-10px mt-2 font-style font-weight-500 line-height-24 font-size-14 text-primary-500",onClick:y,"data-testid":"add-response",children:n.formatMessage(p.Z.addResponse)}),(0,u.jsx)(g.iB,{addWrappingDiv:!0,addingResponse:a,handleCloseEditor:D})]})]})]})})};f.propTypes={endorsed:o().oneOf([l.mf.ENDORSED,l.mf.UNENDORSED,l.mf.DISCUSSION]).isRequired};const b=t.memo(f)}}]);
//# sourceMappingURL=912.44df93da4a6bb471ce9b.js.map