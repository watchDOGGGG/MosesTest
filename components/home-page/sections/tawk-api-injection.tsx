import { useEffect, useRef } from "react";

export function TawkAPIInjection() {
  const divRef = useRef(null);

  let content = ` <script type="text/javascript">
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/6421dc344247f20fefe849ca/1gsi55q54';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
</script>`;

  return <div ref={divRef} dangerouslySetInnerHTML={{ __html: content }}></div>;
}
