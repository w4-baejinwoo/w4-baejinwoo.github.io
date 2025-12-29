function c(e){var o,d;const n=[];if((o=e.selectedProducts)!=null&&o.length){const t=encodeURIComponent(e.selectedProducts.join(","));n.push(`products=${t}`)}if((d=e.selectedRegions)!=null&&d.length){const t=encodeURIComponent(e.selectedRegions.join(","));n.push(`regions=${t}`)}if(e.date){const t=encodeURIComponent(e.date);n.push(`date=${t}`)}const r=n.join("&");return r?`undefined?${r}`:void 0}function u(e){const{reportType:s,reportMonth:n,selectedTeams:r,guidelines:o,userMessage:d}=e;let t=`당신은 두산 전자의 AI 보고서 작성 에이전트입니다.
사용자의 요청과 제공된 정보를 바탕으로 ${n} ${s} 초안을 작성해주세요.

---
사용자 요청: "${d}"

보고서 유형: ${s}
작성 월: ${n}
작성 범위: ${r.join(", ")}`;return o&&(t+=`
지침: ${o}`),t+=`

다음은 보고서 작성 시 고려해야 할 사항입니다:
1. 보고서는 마크다운 형식으로 작성해주세요.
2. 보고서의 제목은 '# ${n} ${s}' 형식으로 시작해주세요.
3. 개요, 주요 성과, 세부 내용, 결론 및 향후 계획 등의 섹션을 포함해주세요.
4. 각 섹션의 내용은 구체적이고 명확하게 작성해주세요.
5. 데이터는 가상의 데이터를 활용하여 작성하되, 실제 보고서처럼 보이도록 해주세요.
6. 보고서의 내용은 두산 전자의 비즈니스 맥락에 맞춰주세요.
7. 보고서의 톤앤매너는 전문적이고 객관적이어야 합니다.
8. 보고서 내용 외에 다른 설명이나 추가적인 대화는 포함하지 마세요. 오직 보고서 내용만 반환하세요.`,t}function i(e){return e.includes("출하실적")||e.includes("출하 실적")}export{u as a,c as g,i};
