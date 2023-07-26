import{u as g,a as h,s as f,r as p,j as e,L as j,a2 as b}from"./index-c94445e5.js";import{u as w}from"./index.esm-557db087.js";const y=()=>{var i;const o=g(),{error:s,status:t,msg:r}=h(f),[m,a]=p.useState(!1),{register:n,handleSubmit:d,formState:{errors:l}}=w(),c=x=>{try{o(b(x)),a(!0)}catch(u){console.log(u),a(!0)}};return m?e.jsx("div",{className:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8",children:e.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsx("img",{className:"mx-auto h-10 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:"Your Company"}),e.jsx("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-slate-200",children:r})]})}):e.jsxs("div",{className:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8",children:[e.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsx("img",{className:"mx-auto h-10 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:"Your Company"}),e.jsx("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-slate-200",children:"Reset Password"})]}),e.jsxs("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[e.jsxs("form",{noValidate:!0,className:"space-y-6",onSubmit:d(c),children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900 dark:text-slate-200",children:"Email address"}),e.jsxs("div",{className:"mt-2",children:[e.jsx("input",{id:"email",...n("email",{required:"Email Address is required",pattern:{value:/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,message:"Email not valid"}}),type:"email",autoComplete:"email",required:!0,defaultValue:"yogeshvanzara98@gmail.com",className:"block w-full dark:bg-slate-600 dark:text-slate-200 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}),l.email&&e.jsx("p",{className:"text-red-500",children:(i=l.email)==null?void 0:i.message}),s&&e.jsx("p",{className:"text-red-500",children:s})]})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",disabled:t==="loading",className:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:t==="loading"?"Please Wait":"Send Email"})})]}),e.jsxs("p",{className:"mt-10 text-center text-sm text-gray-500",children:["Send me back to?"," ",e.jsx(j,{to:"/login",className:"font-semibold leading-6 text-indigo-600 hover:text-indigo-500",children:"Login"})]})]})]})},k=()=>e.jsx(y,{});export{k as default};
