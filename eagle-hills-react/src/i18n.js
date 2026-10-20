import { useEffect, useState } from 'react';
export function useLang(){
  const [lang,setLang]=useState(()=>document.documentElement.lang||'ar');
  useEffect(()=>{const f=e=>setLang(e.detail);window.addEventListener('langchange',f);return()=>window.removeEventListener('langchange',f)},[]);
  return lang;
}
