/* ============================================================
   통찰·유머·감동 — Content Data
   5 days × stories + website recommendations
   ============================================================ */

/* ──────────────────────────────────────────────────────────
   SVG ILLUSTRATIONS  ·  선 드로잉 스타일
   fill 없음 — 모든 형태를 stroke 선으로, wc1 필터로 손그림 흔들림
   배경: #f8f7f4 (크림 흰색)  선: #1a1a1a~#aaa (명암 변화)
   ────────────────────────────────────────────────────────── */
const ILLUSTRATIONS = {

  /* ══ 월요일 — 사랑 — 감동 → 선 드로잉 ══
     아우슈비츠 새벽: 수평선에 아내의 얼굴이 떠오름
     프랑클은 행렬에서 멈춰 아내를 바라보며 손을 뻗음
     색 없음 — 흰 배경 위 선만으로 장면 전체를 표현 */
  1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" translate="no">
  <defs>
    <filter id="wc1" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04 0.08" numOctaves="3" seed="11" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="8" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>

  <!-- 종이 배경 -->
  <rect width="600" height="280" fill="#f8f7f4"/>

  <!-- 별 (× 표시) -->
  <g stroke="#aaa" stroke-width="0.9" stroke-linecap="round">
    <line x1="27" y1="9"  x2="29" y2="13"/><line x1="29" y1="9"  x2="27" y2="13"/>
    <line x1="68" y1="25" x2="70" y2="29"/><line x1="70" y1="25" x2="68" y2="29"/>
    <line x1="112" y1="7" x2="114" y2="11"/><line x1="114" y1="7" x2="112" y2="11"/>
    <line x1="155" y1="22" x2="157" y2="26"/><line x1="157" y1="22" x2="155" y2="26"/>
    <line x1="354" y1="10" x2="356" y2="14"/><line x1="356" y1="10" x2="354" y2="14"/>
    <line x1="462" y1="13" x2="464" y2="17"/><line x1="464" y1="13" x2="462" y2="17"/>
    <line x1="552" y1="18" x2="554" y2="22"/><line x1="554" y1="18" x2="552" y2="22"/>
    <line x1="248" y1="41" x2="250" y2="45"/><line x1="250" y1="41" x2="248" y2="45"/>
  </g>

  <!-- ══ 아내: 수평선에서 떠오르는 얼굴 + 방사형 빛 선 ══ -->
  <g filter="url(#wc1)" stroke="#2a2a2a" fill="none" stroke-linecap="round">
    <!-- 방사형 빛 -->
    <line x1="189" y1="196" x2="189" y2="150" stroke-width="0.9" opacity="0.38"/>
    <line x1="189" y1="196" x2="162" y2="156" stroke-width="0.8" opacity="0.32"/>
    <line x1="189" y1="196" x2="140" y2="172" stroke-width="0.7" opacity="0.28"/>
    <line x1="189" y1="196" x2="128" y2="192" stroke-width="0.7" opacity="0.24"/>
    <line x1="189" y1="196" x2="216" y2="156" stroke-width="0.8" opacity="0.32"/>
    <line x1="189" y1="196" x2="238" y2="172" stroke-width="0.7" opacity="0.28"/>
    <line x1="189" y1="196" x2="250" y2="192" stroke-width="0.7" opacity="0.24"/>
    <line x1="189" y1="224" x2="150" y2="266" stroke-width="0.6" opacity="0.18"/>
    <line x1="189" y1="224" x2="228" y2="266" stroke-width="0.6" opacity="0.18"/>
    <!-- 얼굴 윤곽 -->
    <ellipse cx="189" cy="211" rx="15" ry="18" stroke-width="1.7"/>
    <!-- 눈 -->
    <path d="M182,207 Q186,204 190,207" stroke-width="1.3"/>
    <path d="M190,207 Q194,204 198,207" stroke-width="1.3"/>
    <!-- 머리카락 -->
    <path d="M177,208 Q182,195 189,193 Q196,195 201,208" stroke-width="1.7"/>
    <path d="M177,205 Q176,195 178,189" stroke-width="1.0" opacity="0.5"/>
    <path d="M201,205 Q202,195 200,189" stroke-width="1.0" opacity="0.5"/>
    <!-- 입 (미소) -->
    <path d="M184,217 Q189,221 194,217" stroke-width="1.2" opacity="0.6"/>
  </g>

  <!-- 수평선 -->
  <line x1="0" y1="224" x2="600" y2="224" stroke="#1a1a1a" stroke-width="1.8" filter="url(#wc1)"/>

  <!-- 땅 해칭 -->
  <g filter="url(#wc1)" stroke="#666" stroke-width="0.65" stroke-linecap="round" opacity="0.45">
    <line x1="0" y1="233" x2="600" y2="234"/>
    <line x1="0" y1="244" x2="600" y2="245"/>
    <line x1="0" y1="255" x2="600" y2="256"/>
    <line x1="0" y1="266" x2="600" y2="267"/>
    <line x1="0" y1="276" x2="600" y2="277"/>
  </g>

  <!-- ── 철조망 ── -->
  <g filter="url(#wc1)">
    <line x1="0" y1="205" x2="600" y2="205" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="0" y1="213" x2="600" y2="213" stroke="#1a1a1a" stroke-width="1.2" stroke-linecap="round"/>
    <g stroke="#1a1a1a" stroke-width="1.2" stroke-linecap="round">
      <line x1="38"  y1="201" x2="33"  y2="210"/><line x1="38"  y1="201" x2="43"  y2="210"/>
      <line x1="80"  y1="201" x2="75"  y2="210"/><line x1="80"  y1="201" x2="85"  y2="210"/>
      <line x1="122" y1="201" x2="117" y2="210"/><line x1="122" y1="201" x2="127" y2="210"/>
      <line x1="246" y1="201" x2="241" y2="210"/><line x1="246" y1="201" x2="251" y2="210"/>
      <line x1="300" y1="201" x2="295" y2="210"/><line x1="300" y1="201" x2="305" y2="210"/>
      <line x1="348" y1="201" x2="343" y2="210"/><line x1="348" y1="201" x2="353" y2="210"/>
      <line x1="395" y1="201" x2="390" y2="210"/><line x1="395" y1="201" x2="400" y2="210"/>
      <line x1="489" y1="201" x2="484" y2="210"/><line x1="489" y1="201" x2="494" y2="210"/>
      <line x1="535" y1="201" x2="530" y2="210"/><line x1="535" y1="201" x2="540" y2="210"/>
      <line x1="572" y1="201" x2="567" y2="210"/><line x1="572" y1="201" x2="577" y2="210"/>
    </g>
    <g stroke="#1a1a1a" stroke-width="3.5" stroke-linecap="round">
      <line x1="25"  y1="174" x2="25"  y2="224"/>
      <line x1="295" y1="174" x2="295" y2="224"/>
      <line x1="405" y1="174" x2="405" y2="224"/>
      <line x1="528" y1="174" x2="528" y2="224"/>
    </g>
  </g>

  <!-- ── 죄수 행렬 (원경, 더 구체적: 머리+몸+다리) ── -->
  <g filter="url(#wc1)" stroke="#444" fill="none" stroke-linecap="round">
    <circle cx="332" cy="211" r="3.2" stroke-width="1.3"/>
    <line x1="332" y1="214" x2="332" y2="222" stroke-width="1.5"/>
    <line x1="332" y1="222" x2="328" y2="228" stroke-width="1.2"/>
    <line x1="332" y1="222" x2="336" y2="228" stroke-width="1.2"/>
    <line x1="329" y1="217" x2="324" y2="220" stroke-width="1.0"/>

    <circle cx="358" cy="211" r="3.2" stroke-width="1.3"/>
    <line x1="358" y1="214" x2="358" y2="222" stroke-width="1.5"/>
    <line x1="358" y1="222" x2="354" y2="228" stroke-width="1.2"/>
    <line x1="358" y1="222" x2="362" y2="228" stroke-width="1.2"/>
    <line x1="361" y1="217" x2="366" y2="220" stroke-width="1.0"/>

    <circle cx="462" cy="213" r="2.5" stroke-width="1.1"/>
    <line x1="462" y1="216" x2="462" y2="222" stroke-width="1.3"/>
    <line x1="462" y1="222" x2="459" y2="228" stroke-width="1.1"/>
    <line x1="462" y1="222" x2="465" y2="228" stroke-width="1.1"/>
    <line x1="459" y1="219" x2="455" y2="221" stroke-width="0.9"/>

    <circle cx="490" cy="213" r="2.5" stroke-width="1.1"/>
    <line x1="490" y1="216" x2="490" y2="222" stroke-width="1.3"/>
    <line x1="490" y1="222" x2="487" y2="228" stroke-width="1.1"/>
    <line x1="490" y1="222" x2="493" y2="228" stroke-width="1.1"/>

    <circle cx="520" cy="214" r="2.0" stroke-width="1.0"/>
    <line x1="520" y1="216" x2="520" y2="221" stroke-width="1.2"/>
    <line x1="520" y1="221" x2="517" y2="226" stroke-width="1.0"/>
    <line x1="520" y1="221" x2="523" y2="226" stroke-width="1.0"/>

    <circle cx="548" cy="215" r="2.0" stroke-width="1.0"/>
    <line x1="548" y1="217" x2="548" y2="221" stroke-width="1.2"/>
    <line x1="548" y1="221" x2="545" y2="226" stroke-width="1.0"/>
    <line x1="548" y1="221" x2="551" y2="226" stroke-width="1.0"/>

    <circle cx="572" cy="215" r="1.8" stroke-width="0.9"/>
    <line x1="572" y1="217" x2="572" y2="221" stroke-width="1.1"/>
    <line x1="572" y1="221" x2="570" y2="225" stroke-width="0.9"/>
    <line x1="572" y1="221" x2="574" y2="225" stroke-width="0.9"/>
  </g>

  <!-- ══ 프랑클 — 더 구체적 선 드로잉 ══ -->
  <g filter="url(#wc1)" stroke="#1a1a1a" fill="none" stroke-linecap="round">
    <!-- 머리 -->
    <circle cx="422" cy="165" r="11" stroke-width="2.0"/>
    <!-- 모자: 챙 + 모자통 -->
    <path d="M407,162 Q421,155 435,162" stroke-width="2.8"/>
    <path d="M411,162 Q413,153 421,150 Q430,153 433,162" stroke-width="1.8"/>
    <!-- 목 -->
    <line x1="422" y1="176" x2="422" y2="182" stroke-width="2.2"/>
    <!-- 몸통 윤곽 + 어깨 -->
    <line x1="411" y1="182" x2="433" y2="182" stroke-width="2.0"/>
    <path d="M411,182 Q408,215 406,240" stroke-width="2.5"/>
    <path d="M433,182 Q436,215 438,240" stroke-width="2.5"/>
    <!-- 수감복 가로 줄무늬 -->
    <line x1="410" y1="193" x2="434" y2="192" stroke-width="1.1" opacity="0.55"/>
    <line x1="409" y1="204" x2="434" y2="203" stroke-width="1.1" opacity="0.55"/>
    <line x1="408" y1="215" x2="433" y2="214" stroke-width="1.1" opacity="0.55"/>
    <line x1="407" y1="226" x2="432" y2="225" stroke-width="1.1" opacity="0.55"/>
    <!-- 왼팔: 아내 방향으로 뻗음 -->
    <path d="M411,190 Q394,205 378,216" stroke-width="2.5"/>
    <!-- 손가락 3개 -->
    <line x1="378" y1="216" x2="370" y2="208" stroke-width="1.8"/>
    <line x1="378" y1="216" x2="365" y2="213" stroke-width="1.8"/>
    <line x1="378" y1="216" x2="372" y2="205" stroke-width="1.8"/>
    <!-- 오른팔: 아래로 내림 (곡괭이 잡음) -->
    <path d="M433,190 Q440,212 444,232" stroke-width="2.5"/>
    <!-- 곡괭이 자루 -->
    <line x1="444" y1="232" x2="448" y2="270" stroke-width="2.0"/>
    <!-- 곡괭이 머리 (T자) -->
    <line x1="430" y1="268" x2="466" y2="268" stroke-width="3.5"/>
    <path d="M430,268 Q428,261 433,257" stroke-width="2.0"/>
    <!-- 왼다리 -->
    <path d="M415,240 Q411,256 407,272" stroke-width="2.8"/>
    <!-- 오른다리 -->
    <path d="M431,240 Q434,256 437,272" stroke-width="2.8"/>
    <!-- 신발 -->
    <path d="M407,272 Q401,274 396,271" stroke-width="2.2"/>
    <path d="M437,272 Q443,274 448,271" stroke-width="2.2"/>
  </g>
</svg>`,

  /* ══ 수요일용 — 알렉산더+디오게네스 — 유머 → 팝아트 스타일 ══
     Ben-Day 하프톤 + 굵은 윤곽선 + 말풍선 = 권력 앞에서 비켜달라 */
  2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" translate="no">
  <defs>
    <pattern id="hd2" x="0" y="0" width="9" height="9" patternUnits="userSpaceOnUse">
      <circle cx="4.5" cy="4.5" r="2.0" fill="#f5e010" opacity="0.65"/>
    </pattern>
    <!-- 스케치 강화: scale 10 → 손그림 선 흔들림, 만화·풍자 느낌 -->
    <filter id="sketch2" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04 0.08" numOctaves="3" seed="11" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
  <!-- 팝아트 노란 배경 -->
  <rect width="600" height="280" fill="#fffbe0"/>
  <rect width="600" height="280" fill="url(#hd2)" opacity="0.45"/>
  <!-- 바닥 -->
  <rect x="0" y="228" width="600" height="52" fill="#e0c840" opacity="0.55"/>
  <rect x="0" y="228" width="600" height="3" fill="#111"/>
  <!-- 햇살 (오른쪽 위에서 왼쪽으로) -->
  <line x1="430" y1="0" x2="100" y2="280" stroke="#fff5a0" stroke-width="34" opacity="0.26"/>
  <line x1="448" y1="0" x2="148" y2="280" stroke="#fff5a0" stroke-width="18" opacity="0.20"/>
  <line x1="462" y1="0" x2="190" y2="280" stroke="#fff5a0" stroke-width="10" opacity="0.15"/>
  <!-- 태양 (오른쪽 상단) -->
  <circle cx="542" cy="40" r="38" fill="#ffd700" stroke="#111" stroke-width="3"/>
  <circle cx="542" cy="40" r="27" fill="#ffec40" stroke="#111" stroke-width="1"/>
  <line x1="542" y1="0"  x2="542" y2="11"  stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <line x1="576" y1="8"  x2="567" y2="16"  stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <line x1="582" y1="40" x2="570" y2="40"  stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <line x1="576" y1="72" x2="567" y2="63"  stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <line x1="508" y1="8"  x2="518" y2="16"  stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <line x1="502" y1="40" x2="514" y2="40"  stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <line x1="508" y1="72" x2="518" y2="63"  stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <!-- ── 디오게네스 (왼쪽, 술통 안에 누워) ── -->
  <!-- 술통 -->
  <ellipse cx="152" cy="242" rx="90" ry="23" fill="#b06820" stroke="#111" stroke-width="3"/>
  <rect x="62" y="170" width="180" height="74" fill="#cc7828" stroke="#111" stroke-width="3" filter="url(#sketch2)"/>
  <ellipse cx="152" cy="170" rx="90" ry="23" fill="#c07028" stroke="#111" stroke-width="3"/>
  <!-- 나무결 -->
  <line x1="86"  y1="172" x2="86"  y2="240" stroke="#8a4810" stroke-width="1.8" opacity="0.4"/>
  <line x1="112" y1="171" x2="112" y2="241" stroke="#8a4810" stroke-width="1.8" opacity="0.4"/>
  <line x1="138" y1="170" x2="138" y2="242" stroke="#8a4810" stroke-width="1.8" opacity="0.4"/>
  <line x1="166" y1="170" x2="166" y2="242" stroke="#8a4810" stroke-width="1.8" opacity="0.4"/>
  <line x1="192" y1="171" x2="192" y2="241" stroke="#8a4810" stroke-width="1.8" opacity="0.4"/>
  <line x1="218" y1="172" x2="218" y2="240" stroke="#8a4810" stroke-width="1.8" opacity="0.4"/>
  <!-- 테 -->
  <rect x="62" y="188" width="180" height="6" fill="#6a3808" stroke="#111" stroke-width="1.5" opacity="0.8"/>
  <rect x="62" y="220" width="180" height="6" fill="#6a3808" stroke="#111" stroke-width="1.5" opacity="0.8"/>
  <!-- 디오게네스 얼굴 -->
  <circle cx="152" cy="157" r="25" fill="#f5c088" stroke="#111" stroke-width="3.5"/>
  <!-- 덥수룩한 수염 -->
  <path d="M130 165Q136 180 152 186Q168 180 174 165" fill="#7a5030" stroke="#111" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M131 162Q142 169 152 169Q162 169 173 162" fill="none" stroke="#5a3820" stroke-width="3" stroke-linecap="round"/>
  <!-- 눈 (느긋하게 반쯤 감음) -->
  <path d="M141 153Q146 150 151 153" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M153 153Q158 150 163 153" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round"/>
  <!-- 손 뻗어 알렉산더를 가리킴 -->
  <path d="M177 160Q204 150 232 144" stroke="#f5c088" stroke-width="10" stroke-linecap="round" fill="none"/>
  <circle cx="237" cy="142" r="9" fill="#f5c088" stroke="#111" stroke-width="2.5"/>
  <!-- 말풍선 (디오게네스) -->
  <path d="M36 72L252 72Q268 72 268 58L268 14Q268 0 252 0L36 0Q20 0 20 14L20 58Q20 72 36 72Z" fill="white" stroke="#111" stroke-width="3.5"/>
  <path d="M138 72L126 92L158 72Z" fill="white" stroke="#111" stroke-width="2.5"/>
  <line x1="129" y1="79" x2="139" y2="72" stroke="white" stroke-width="5"/>
  <text x="144" y="31" text-anchor="middle" font-size="14" fill="#111" font-family="Impact,'Arial Black',sans-serif">햇빛 좀</text>
  <text x="144" y="55" text-anchor="middle" font-size="14" fill="#111" font-family="Impact,'Arial Black',sans-serif">비켜주시오</text>
  <!-- ── 알렉산더 (오른쪽, 갑옷) ── -->
  <!-- 다리 -->
  <rect x="385" y="182" width="82" height="52" rx="4" fill="#d4af37" stroke="#111" stroke-width="3"/>
  <line x1="426" y1="182" x2="426" y2="234" stroke="#111" stroke-width="1.5" opacity="0.35"/>
  <!-- 상체 갑옷 -->
  <rect x="379" y="136" width="94" height="52" rx="5" fill="#d4af37" stroke="#111" stroke-width="3"/>
  <ellipse cx="426" cy="160" rx="22" ry="15" fill="none" stroke="#b8960c" stroke-width="2" opacity="0.6"/>
  <line x1="379" y1="160" x2="473" y2="160" stroke="#b8960c" stroke-width="1.5" opacity="0.4"/>
  <!-- 머리 -->
  <circle cx="426" cy="112" r="27" fill="#f5c088" stroke="#111" stroke-width="3.5"/>
  <!-- 투구 -->
  <path d="M399 112Q399 74 426 74Q453 74 453 112" fill="#d4af37" stroke="#111" stroke-width="3.5"/>
  <path d="M399 112Q389 112 389 104L389 98Q389 92 399 92" fill="#c8a030" stroke="#111" stroke-width="2.5"/>
  <path d="M453 112Q463 112 463 104L463 98Q463 92 453 92" fill="#c8a030" stroke="#111" stroke-width="2.5"/>
  <!-- 투구 깃털 -->
  <path d="M426 74Q412 52 416 36" stroke="#cc1111" stroke-width="6" stroke-linecap="round" fill="none"/>
  <path d="M426 74Q424 50 428 34" stroke="#cc1111" stroke-width="4" stroke-linecap="round" fill="none"/>
  <path d="M426 74Q438 54 435 38" stroke="#aa0a0a" stroke-width="3" stroke-linecap="round" fill="none"/>
  <!-- 눈 (충격) -->
  <ellipse cx="416" cy="109" rx="5.5" ry="7" fill="white" stroke="#111" stroke-width="2"/>
  <ellipse cx="436" cy="109" rx="5.5" ry="7" fill="white" stroke="#111" stroke-width="2"/>
  <circle cx="417" cy="110" r="3.2" fill="#222"/>
  <circle cx="437" cy="110" r="3.2" fill="#222"/>
  <!-- 눈썹 (올라간) -->
  <path d="M411 100Q416 96 421 100" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <path d="M431 100Q436 96 441 100" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"/>
  <!-- 땀방울 -->
  <ellipse cx="457" cy="96" rx="4" ry="5.5" fill="#88ccff" stroke="#55aaee" stroke-width="1.5" opacity="0.78"/>
  <!-- 팔 -->
  <line x1="379" y1="154" x2="342" y2="170" stroke="#d4af37" stroke-width="13" stroke-linecap="round"/>
  <line x1="473" y1="154" x2="512" y2="165" stroke="#d4af37" stroke-width="13" stroke-linecap="round"/>
  <!-- 칼 -->
  <line x1="342" y1="170" x2="325" y2="190" stroke="#bbb" stroke-width="5" stroke-linecap="round"/>
  <line x1="334" y1="177" x2="318" y2="177" stroke="#bbb" stroke-width="4" stroke-linecap="round"/>
  <!-- 말풍선 (알렉산더) -->
  <path d="M316 94L566 94Q580 94 580 80L580 24Q580 10 566 10L316 10Q302 10 302 24L302 80Q302 94 316 94Z" fill="white" stroke="#111" stroke-width="3.5"/>
  <path d="M396 94L384 110L416 94Z" fill="white" stroke="#111" stroke-width="2.5"/>
  <line x1="387" y1="100" x2="397" y2="94" stroke="white" stroke-width="5"/>
  <text x="441" y="44" text-anchor="middle" font-size="14" fill="#111" font-family="Impact,sans-serif">무엇이든</text>
  <text x="441" y="66" text-anchor="middle" font-size="14" fill="#111" font-family="Impact,sans-serif">들어주겠다</text>
  <text x="441" y="84" text-anchor="middle" font-size="12" fill="#444" font-family="Georgia,serif" font-style="italic">— 세상을 정복한 황제</text>
  <!-- 스피드라인 -->
  <line x1="300" y1="108" x2="310" y2="115" stroke="#111" stroke-width="2" opacity="0.30"/>
  <line x1="298" y1="122" x2="308" y2="124" stroke="#111" stroke-width="2" opacity="0.30"/>
  <line x1="298" y1="136" x2="308" y2="134" stroke="#111" stroke-width="2" opacity="0.30"/>
  <!-- 팝아트 레이블 -->
  <text x="12" y="22" font-size="13" fill="#e83028" font-family="Impact,sans-serif" letter-spacing="1" opacity="0.85">POP ART</text>
  <!-- 하단 캡션 -->
  <text x="300" y="268" text-anchor="middle" font-size="14" fill="#3a2800" font-family="Georgia,serif" font-style="italic">원하는 것이 없는 사람이 가장 자유롭다</text>
</svg>`,

  /* ══ 화요일용 — 체호프의 총 — 통찰 → 극장 미니멀 스타일 ══
     어두운 무대 + 스포트라이트 + 벽에 걸린 총 + 막1→막3 타임라인 */
  3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" translate="no">
  <defs>
    <pattern id="wp3" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M12 0L24 12L12 24L0 12Z" fill="none" stroke="#2a2010" stroke-width="0.6" opacity="0.45"/>
    </pattern>
    <filter id="glow3" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8"/>
    </filter>
    <filter id="glow3sm" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3"/>
    </filter>
    <linearGradient id="ctnL3" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#4a0a15"/>
      <stop offset="100%" stop-color="#7a1522"/>
    </linearGradient>
    <linearGradient id="ctnR3" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#7a1522"/>
      <stop offset="100%" stop-color="#4a0a15"/>
    </linearGradient>
    <!-- 수묵화: 낮은 주파수 큰 물결 + 먹 번짐 + 채도 제거 -->
    <filter id="sketch3" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.03 0.06" numOctaves="3" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="4.5" xChannelSelector="R" yChannelSelector="G" result="warped"/>
      <feGaussianBlur in="warped" stdDeviation="2"/>
      <feColorMatrix type="saturate" values="0.15"/>
    </filter>
    <!-- 페이퍼 텍스처 필터 -->
    <filter id="grain3" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.7 0.8" numOctaves="4" seed="5"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <!-- 어두운 극장 배경 -->
  <rect width="600" height="280" fill="#090706"/>
  <!-- 무대 벽 (중앙) -->
  <rect x="98" y="30" width="404" height="196" fill="#111009"/>
  <rect x="98" y="30" width="404" height="196" fill="url(#wp3)"/>
  <!-- 벽 질감 노이즈 -->
  <rect x="98" y="30" width="404" height="196" filter="url(#grain3)" opacity="0.06"/>
  <!-- 커튼 왼쪽 -->
  <path d="M0 0 L114 0 Q90 55 94 128 Q90 195 114 280 L0 280Z" fill="url(#ctnL3)" stroke="#2a0808" stroke-width="1"/>
  <path d="M22 0 L98 0 Q78 58 82 128 Q78 192 98 280 L22 280Z" fill="#6a1220" opacity="0.55"/>
  <path d="M18 0Q28 54 20 128Q12 196 18 280" fill="none" stroke="#3a0a14" stroke-width="2" opacity="0.45"/>
  <path d="M48 0Q58 48 50 128Q42 192 48 280" fill="none" stroke="#5a1018" stroke-width="1.5" opacity="0.38"/>
  <!-- 커튼 오른쪽 -->
  <path d="M600 0 L486 0 Q510 55 506 128 Q510 195 486 280 L600 280Z" fill="url(#ctnR3)" stroke="#2a0808" stroke-width="1"/>
  <path d="M578 0 L502 0 Q522 58 518 128 Q522 192 502 280 L578 280Z" fill="#6a1220" opacity="0.55"/>
  <path d="M582 0Q572 54 580 128Q588 196 582 280" fill="none" stroke="#3a0a14" stroke-width="2" opacity="0.45"/>
  <path d="M552 0Q542 48 550 128Q558 192 552 280" fill="none" stroke="#5a1018" stroke-width="1.5" opacity="0.38"/>
  <!-- 상단 발란스 -->
  <rect x="0" y="0" width="600" height="30" fill="#320810"/>
  <path d="M0 30 Q25 42 50 30 Q75 18 100 30 Q125 42 150 30 Q175 18 200 30 Q225 42 250 30 Q275 18 300 30 Q325 42 350 30 Q375 18 400 30 Q425 42 450 30 Q475 18 500 30 Q525 42 550 30 Q575 18 600 30" fill="#5a1018" stroke="#320810" stroke-width="1"/>
  <!-- 스포트라이트 빔 (총 향해) -->
  <path d="M300 30 L228 146 L372 146Z" fill="#fffde0" opacity="0.04"/>
  <ellipse cx="300" cy="142" rx="68" ry="20" fill="#fffde0" opacity="0.05" filter="url(#glow3)"/>
  <!-- 총걸이 판넬 (벽 중앙) -->
  <rect x="240" y="58" width="120" height="94" rx="4" fill="#191410" stroke="#5a4820" stroke-width="2.5" filter="url(#sketch3)"/>
  <rect x="246" y="64" width="108" height="82" rx="2" fill="#0d0b08" stroke="#382e16" stroke-width="1.5"/>
  <!-- 앤틱 권총 -->
  <!-- 총신 -->
  <rect x="254" y="100" width="64" height="9" rx="4.5" fill="#8a7848" stroke="#5a4828" stroke-width="1.3"/>
  <!-- 방아쇠 가드 -->
  <path d="M300 109 Q310 121 304 127 Q298 121 300 109Z" fill="none" stroke="#8a7848" stroke-width="2.3" stroke-linecap="round"/>
  <!-- 손잡이 -->
  <path d="M308 104 Q326 104 328 118 Q326 128 315 128 L300 128 L300 109Z" fill="#6a4830" stroke="#3a2818" stroke-width="1.5" rx="3"/>
  <!-- 총 광택 -->
  <line x1="256" y1="102" x2="314" y2="102" stroke="#c8b870" stroke-width="1.2" opacity="0.35"/>
  <!-- 그림자 -->
  <ellipse cx="300" cy="129" rx="38" ry="4" fill="#000" opacity="0.35"/>
  <!-- 스포트라이트 (총 위) -->
  <ellipse cx="300" cy="104" rx="46" ry="24" fill="#fffde0" opacity="0.06" filter="url(#glow3sm)"/>
  <!-- 명패 -->
  <rect x="272" y="132" width="56" height="12" rx="2" fill="#231e10" stroke="#4a3820" stroke-width="1"/>
  <text x="300" y="141" text-anchor="middle" font-size="11" fill="#c8a848" font-family="Georgia,serif" font-style="italic">막 1</text>
  <!-- 무대 바닥 -->
  <rect x="98" y="226" width="404" height="14" fill="#1c1608" stroke="#282010" stroke-width="1"/>
  <!-- 타임라인 영역 -->
  <rect x="0" y="240" width="600" height="40" fill="#050403"/>
  <!-- 막 1 블록 -->
  <rect x="106" y="248" width="116" height="18" rx="3" fill="#2a2010" stroke="#6a5828" stroke-width="1.2"/>
  <text x="164" y="261" text-anchor="middle" font-size="11" fill="#d4b050" font-family="Georgia,serif" font-style="italic">막 1 · 총이 걸린다</text>
  <!-- 점선 화살표 -->
  <line x1="224" y1="257" x2="258" y2="257" stroke="#8a7040" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.9"/>
  <polygon points="256,253 266,257 256,261" fill="#8a7040" opacity="0.9"/>
  <text x="271" y="262" font-size="12" fill="#a08040" font-family="Arial">···</text>
  <!-- 막 3 블록 -->
  <rect x="284" y="248" width="210" height="18" rx="3" fill="#2a2010" stroke="#6a5828" stroke-width="1.2"/>
  <!-- 발사 섬광 -->
  <circle cx="302" cy="257" r="8" fill="#ff8c00" opacity="0.25" filter="url(#glow3sm)"/>
  <circle cx="302" cy="257" r="4.5" fill="#ffcc00" opacity="0.60"/>
  <line x1="309" y1="251" x2="314" y2="246" stroke="#ffcc00" stroke-width="1.5" stroke-linecap="round" opacity="0.85"/>
  <line x1="311" y1="257" x2="317" y2="257" stroke="#ffcc00" stroke-width="1.5" stroke-linecap="round" opacity="0.85"/>
  <line x1="309" y1="263" x2="314" y2="268" stroke="#ffcc00" stroke-width="1.5" stroke-linecap="round" opacity="0.85"/>
  <text x="402" y="261" text-anchor="middle" font-size="11" fill="#d4b050" font-family="Georgia,serif" font-style="italic">막 3 · 반드시 발사된다</text>
  <!-- 레이블 -->
  <text x="12" y="24" font-size="14" fill="#c8a848" font-family="Georgia,serif" font-style="italic">체호프의 총</text>
</svg>`,

  /* ══ 목요일용 — 창백한 푸른 점 — 감동 → 우주/수채화 스타일 ══
     광활한 암흑 우주 + 보이저 1호 도해 + 60억km 거리 + 창백한 파란 점 */
  4: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" translate="no">
  <defs>
    <linearGradient id="space4" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#06091a"/>
      <stop offset="55%"  stop-color="#030710"/>
      <stop offset="100%" stop-color="#020408"/>
    </linearGradient>
    <pattern id="grid4" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse">
      <path d="M26 0L0 0L0 26" fill="none" stroke="#1a3558" stroke-width="0.28" opacity="0.38"/>
    </pattern>
    <filter id="glow4" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="9"/>
    </filter>
    <filter id="glow4sm" x="-200%" y="-200%" width="500%" height="500%">
      <feGaussianBlur stdDeviation="3.5"/>
    </filter>
    <!-- 페이퍼 텍스처 필터 -->
    <filter id="grain4" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.85 0.95" numOctaves="4" seed="8"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <!-- 수묵화: 우주 여백·고독 — 먹 번짐 + 채도 제거 -->
    <filter id="sketch4" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.03 0.07" numOctaves="3" seed="13" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" result="warped"/>
      <feGaussianBlur in="warped" stdDeviation="1.8"/>
      <feColorMatrix type="saturate" values="0.15"/>
    </filter>
  </defs>
  <!-- 우주 배경 -->
  <rect width="600" height="280" fill="url(#space4)"/>
  <rect width="600" height="280" fill="url(#grid4)" opacity="0.35"/>
  <!-- 우주 노이즈 오버레이 -->
  <rect width="600" height="280" filter="url(#grain4)" opacity="0.04"/>
  <!-- 별 (왼쪽으로 갈수록 밝고 오른쪽은 점점 희미) -->
  <circle cx="14"  cy="10"  r="0.9" fill="#eef" opacity="0.58"/>
  <circle cx="38"  cy="34"  r="1.1" fill="#ddf" opacity="0.50"/>
  <circle cx="62"  cy="7"   r="0.7" fill="#ccf" opacity="0.44"/>
  <circle cx="90"  cy="52"  r="1.0" fill="#eef" opacity="0.52"/>
  <circle cx="18"  cy="70"  r="0.7" fill="#dde" opacity="0.40"/>
  <circle cx="124" cy="20"  r="1.2" fill="#fff" opacity="0.56"/>
  <circle cx="150" cy="65"  r="0.8" fill="#dde" opacity="0.45"/>
  <circle cx="172" cy="14"  r="0.6" fill="#ccf" opacity="0.38"/>
  <circle cx="200" cy="42"  r="1.0" fill="#eef" opacity="0.46"/>
  <circle cx="235" cy="28"  r="0.7" fill="#dde" opacity="0.34"/>
  <circle cx="255" cy="78"  r="1.0" fill="#eef" opacity="0.38"/>
  <circle cx="284" cy="16"  r="0.8" fill="#ccf" opacity="0.30"/>
  <circle cx="44"  cy="108" r="0.9" fill="#dde" opacity="0.42"/>
  <circle cx="82"  cy="136" r="0.7" fill="#eef" opacity="0.35"/>
  <circle cx="116" cy="102" r="0.6" fill="#ccf" opacity="0.30"/>
  <circle cx="174" cy="118" r="0.8" fill="#dde" opacity="0.26"/>
  <circle cx="216" cy="152" r="0.7" fill="#eef" opacity="0.22"/>
  <circle cx="24"  cy="188" r="0.9" fill="#dde" opacity="0.36"/>
  <circle cx="68"  cy="218" r="0.7" fill="#eef" opacity="0.30"/>
  <circle cx="106" cy="198" r="0.8" fill="#ccf" opacity="0.26"/>
  <circle cx="154" cy="238" r="0.6" fill="#dde" opacity="0.22"/>
  <circle cx="196" cy="172" r="0.7" fill="#eef" opacity="0.20"/>
  <circle cx="246" cy="228" r="0.8" fill="#dde" opacity="0.18"/>
  <circle cx="306" cy="138" r="0.6" fill="#ccf" opacity="0.15"/>
  <circle cx="336" cy="58"  r="0.7" fill="#eef" opacity="0.13"/>
  <circle cx="374" cy="178" r="0.5" fill="#dde" opacity="0.11"/>
  <circle cx="414" cy="98"  r="0.5" fill="#ccf" opacity="0.09"/>
  <!-- ── 보이저 1호 (왼쪽) ── -->
  <!-- 대형 접시 안테나 -->
  <ellipse cx="60" cy="130" rx="44" ry="9" fill="none" stroke="#8ab4d8" stroke-width="2.4" opacity="0.92"/>
  <ellipse cx="60" cy="130" rx="44" ry="9" fill="#0b2a4a" opacity="0.45"/>
  <path d="M16 130 Q60 119 104 130" fill="none" stroke="#6090b8" stroke-width="1.6" opacity="0.68"/>
  <!-- 지지대 -->
  <line x1="60" y1="139" x2="60" y2="158" stroke="#8ab4d8" stroke-width="2.6" stroke-linecap="round" opacity="0.88"/>
  <!-- 본체 -->
  <rect x="48" y="156" width="24" height="17" rx="2" fill="#6a92b8" stroke="#8ab4d8" stroke-width="1.8" opacity="0.92" filter="url(#sketch4)"/>
  <!-- RTG 팔 -->
  <line x1="60" y1="158" x2="28" y2="174" stroke="#8ab4d8" stroke-width="2.2" stroke-linecap="round" opacity="0.82"/>
  <line x1="60" y1="158" x2="92" y2="174" stroke="#8ab4d8" stroke-width="2.2" stroke-linecap="round" opacity="0.82"/>
  <rect x="20" y="170" width="16" height="8" rx="2" fill="#5a7fa0" stroke="#8ab4d8" stroke-width="1.2" opacity="0.88"/>
  <rect x="84" y="170" width="16" height="8" rx="2" fill="#5a7fa0" stroke="#8ab4d8" stroke-width="1.2" opacity="0.88"/>
  <!-- 계측 붐 -->
  <line x1="60" y1="130" x2="60" y2="96" stroke="#6090b8" stroke-width="1.2" stroke-linecap="round" opacity="0.65" stroke-dasharray="3,2"/>
  <circle cx="60" cy="94" r="2.5" fill="#8ab4d8" opacity="0.78"/>
  <!-- Voyager 레이블 -->
  <text x="14" y="18" font-size="13" fill="#7ab8e0" font-family="Arial,sans-serif" letter-spacing="0.8" opacity="0.95">VOYAGER 1  ·  1977</text>
  <!-- ── 카메라 빔 (보이저 → 지구, 매우 가늘고 희미하게) ── -->
  <line x1="104" y1="130" x2="564" y2="140" stroke="#fffde0" stroke-width="0.7" opacity="0.12"/>
  <path d="M104 127 L564 137 L564 143 L104 133Z" fill="#fffde0" opacity="0.03"/>
  <!-- ── 태양 빛 산란 줄기 (창백한 푸른 점 사진 특유의 광선) ── -->
  <line x1="568" y1="0"   x2="424" y2="280" stroke="#ffeebb" stroke-width="24" opacity="0.042"/>
  <line x1="574" y1="0"   x2="466" y2="280" stroke="#ffeebb" stroke-width="14" opacity="0.048"/>
  <line x1="580" y1="0"   x2="508" y2="280" stroke="#ffeebb" stroke-width="8"  opacity="0.038"/>
  <line x1="562" y1="0"   x2="382" y2="280" stroke="#ffeebb" stroke-width="5"  opacity="0.030"/>
  <!-- ── 거리 주석선 ── -->
  <line x1="112" y1="206" x2="554" y2="206" stroke="#1e3c5a" stroke-width="1" stroke-dasharray="3,4" opacity="0.55"/>
  <polygon points="112,202 102,206 112,210" fill="#1e3c5a" opacity="0.55"/>
  <polygon points="554,202 564,206 554,210" fill="#1e3c5a" opacity="0.55"/>
  <text x="333" y="202" text-anchor="middle" font-size="13" fill="#6aaad0" font-family="Arial,sans-serif" opacity="0.92">60억 킬로미터</text>
  <!-- ── 창백한 푸른 점 (지구) ── -->
  <!-- 배경 빛 번짐 -->
  <circle cx="564" cy="140" r="20" fill="#5588cc" opacity="0.07" filter="url(#glow4)"/>
  <circle cx="564" cy="140" r="9"  fill="#7aaaee" opacity="0.10" filter="url(#glow4sm)"/>
  <!-- 점 자체 -->
  <circle cx="564" cy="140" r="3.4" fill="#aacbee" opacity="0.88"/>
  <circle cx="563" cy="139" r="1.9" fill="#cce0ff" opacity="0.92"/>
  <!-- 태양 산란 후광 -->
  <circle cx="564" cy="140" r="5.5" fill="#88aadd" opacity="0.28" filter="url(#glow4sm)"/>
  <!-- Earth 주석 -->
  <line x1="564" y1="132" x2="564" y2="114" stroke="#4a80aa" stroke-width="1" opacity="0.72"/>
  <line x1="564" y1="114" x2="538" y2="114" stroke="#4a80aa" stroke-width="1" opacity="0.72"/>
  <text x="536" y="111" font-size="12" fill="#90c4e4" font-family="Arial,sans-serif" text-anchor="end">Earth</text>
  <text x="536" y="125" font-size="11" fill="#70a8c8" font-family="Arial,sans-serif" text-anchor="end" opacity="0.88">1/12 픽셀</text>
  <!-- 세이건 인용 (하단) -->
  <rect x="0" y="244" width="600" height="36" fill="#020407" opacity="0.85"/>
  <text x="300" y="260" text-anchor="middle" font-size="13" fill="#a0c0d8" font-family="Georgia,serif" font-style="italic">"저것을 보라. 저게 여기다. 저게 집이다. 저게 우리다."</text>
  <text x="300" y="275" text-anchor="middle" font-size="11" fill="#7090a8" font-family="Arial,sans-serif" opacity="0.88">— Carl Sagan, Pale Blue Dot, 1994</text>
</svg>`,

  /* ══ 금요일 — 과학·정치 — 유머 → 선 드로잉 ══
     파인만의 O링 청문회 장면
     왼쪽: NASA 보고서 더미 / 중앙: 얼음물 컵 + C집게 O링 / 오른쪽: 파인만 + 마이크 */
  5: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" translate="no">
  <defs>
    <filter id="wc5" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04 0.08" numOctaves="3" seed="17" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="8" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>

  <!-- 크림 배경 -->
  <rect width="600" height="280" fill="#f8f7f4"/>

  <!-- ── 청문회 테이블 ── -->
  <g filter="url(#wc5)">
    <rect x="0" y="212" width="600" height="12" fill="#e0d8cc" stroke="#2a2a2a" stroke-width="1.8"/>
    <rect x="0" y="224" width="600" height="56" fill="#d8cfc2"/>
  </g>

  <!-- ── 왼쪽: NASA 보고서 더미 ── -->
  <g filter="url(#wc5)" stroke="#2a2a2a" stroke-linecap="round">
    <!-- 두꺼운 바인더 -->
    <rect x="28" y="158" width="78" height="54" rx="2" fill="#c4b49a" stroke-width="2.0"/>
    <rect x="28" y="158" width="10" height="54" rx="1" fill="#8a7860" stroke-width="1.5"/>
    <!-- 바인더 텍스트 줄 -->
    <line x1="44" y1="170" x2="100" y2="170" stroke-width="0.8" opacity="0.45"/>
    <line x1="44" y1="177" x2="97"  y2="177" stroke-width="0.8" opacity="0.45"/>
    <line x1="44" y1="184" x2="99"  y2="184" stroke-width="0.8" opacity="0.45"/>
    <line x1="44" y1="191" x2="95"  y2="191" stroke-width="0.8" opacity="0.45"/>
    <line x1="44" y1="198" x2="98"  y2="198" stroke-width="0.8" opacity="0.45"/>
    <line x1="44" y1="205" x2="94"  y2="205" stroke-width="0.8" opacity="0.45"/>
    <!-- 종이 더미 위로 -->
    <rect x="22" y="147" width="76" height="14" rx="1" fill="#f5f2ec" stroke-width="1.3"/>
    <rect x="18" y="136" width="76" height="14" rx="1" fill="#f8f5ef" stroke-width="1.3"/>
    <rect x="24" y="125" width="74" height="14" rx="1" fill="#f5f2ec" stroke-width="1.3"/>
    <rect x="20" y="114" width="74" height="14" rx="1" fill="#f8f5ef" stroke-width="1.3"/>
    <!-- 종이 내용 선 -->
    <line x1="28" y1="140" x2="90" y2="140" stroke-width="0.6" opacity="0.35"/>
    <line x1="28" y1="129" x2="88" y2="129" stroke-width="0.6" opacity="0.35"/>
    <line x1="28" y1="118" x2="88" y2="118" stroke-width="0.6" opacity="0.35"/>
  </g>

  <!-- ── 중앙: 얼음물 컵 ── -->
  <g filter="url(#wc5)" stroke-linecap="round">
    <!-- 컵 본체 -->
    <path d="M218 118 L208 212 L308 212 L298 118 Z" stroke="#1a1a1a" stroke-width="2.5" fill="#e8f4fb" fill-opacity="0.55"/>
    <!-- 컵 윗테두리 -->
    <line x1="215" y1="118" x2="301" y2="118" stroke="#1a1a1a" stroke-width="2.8"/>
    <!-- 물 표면 -->
    <path d="M210 140 Q240 134 263 140 Q282 145 305 138" stroke="#4a8fb8" stroke-width="1.4" fill="none"/>
    <!-- 물 속 채우기 -->
    <path d="M210 140 Q240 134 263 140 Q282 145 305 138 L308 212 L208 212 Z" fill="#c8e8f8" fill-opacity="0.35" stroke="none"/>
    <!-- 얼음 조각 1 -->
    <rect x="220" y="148" width="22" height="20" rx="2" fill="#dff3fc" stroke="#6ab0d8" stroke-width="1.3" transform="rotate(14,231,158)"/>
    <!-- 얼음 조각 2 -->
    <rect x="250" y="155" width="20" height="18" rx="2" fill="#dff3fc" stroke="#6ab0d8" stroke-width="1.3" transform="rotate(-9,260,164)"/>
    <!-- 얼음 조각 3 -->
    <rect x="276" y="148" width="18" height="17" rx="2" fill="#dff3fc" stroke="#6ab0d8" stroke-width="1.3" transform="rotate(6,285,156)"/>
    <!-- 물 반짝임 -->
    <line x1="224" y1="172" x2="230" y2="169" stroke="#90ccec" stroke-width="1.8" opacity="0.65"/>
    <line x1="292" y1="176" x2="298" y2="173" stroke="#90ccec" stroke-width="1.8" opacity="0.65"/>
  </g>

  <!-- ── C집게 + O링 (컵에 담그는 중) ── -->
  <g filter="url(#wc5)" stroke="#1a1a1a" fill="none" stroke-linecap="round">
    <!-- C집게 몸체 -->
    <path d="M264 55 Q294 55 306 72 Q318 90 306 110 Q294 128 264 128" stroke-width="3.2"/>
    <!-- 집게 양끝 -->
    <line x1="258" y1="55"  x2="264" y2="55"  stroke-width="2.8"/>
    <line x1="258" y1="128" x2="264" y2="128" stroke-width="2.8"/>
    <!-- O링 — 집게 안쪽에 끼워진 고무링 -->
    <ellipse cx="258" cy="91" rx="18" ry="8" stroke="#5a3010" stroke-width="4.5" fill="none"/>
    <!-- 집게 자루 -->
    <line x1="258" y1="91" x2="170" y2="68" stroke-width="3.2"/>
    <!-- 손가락들 -->
    <path d="M170 68 Q158 62 153 57 Q148 52 151 46 Q154 40 161 44" stroke-width="2.2"/>
    <path d="M161 44 Q167 33 175 38 Q182 30 190 36 Q197 29 204 36" stroke-width="2.0"/>
    <path d="M204 36 Q212 38 207 49 Q202 58 197 63" stroke-width="2.0"/>
    <path d="M151 46 Q146 40 148 33 Q151 27 156 30" stroke-width="1.7"/>
  </g>

  <!-- ── 오른쪽: 파인만 (테이블에 앉아 집게를 쥔) ── -->
  <g filter="url(#wc5)" stroke="#1a1a1a" fill="none" stroke-linecap="round">
    <!-- 머리 -->
    <circle cx="450" cy="148" r="20" stroke-width="2.2"/>
    <!-- 머리카락 -->
    <path d="M432 145 Q438 130 450 127 Q462 130 468 145" stroke-width="2.0"/>
    <!-- 안경 -->
    <path d="M438 146 Q444 142 450 146" stroke-width="1.3" opacity="0.75"/>
    <path d="M450 146 Q456 142 462 146" stroke-width="1.3" opacity="0.75"/>
    <line x1="436" y1="146" x2="438" y2="146" stroke-width="1.3" opacity="0.75"/>
    <line x1="462" y1="146" x2="464" y2="146" stroke-width="1.3" opacity="0.75"/>
    <!-- 목 -->
    <line x1="450" y1="168" x2="450" y2="176" stroke-width="2.5"/>
    <!-- 몸통 -->
    <line x1="436" y1="176" x2="464" y2="176" stroke-width="2.0"/>
    <path d="M436 176 Q432 200 430 212" stroke-width="2.8"/>
    <path d="M464 176 Q468 200 470 212" stroke-width="2.8"/>
    <!-- 왼팔: 집게 쥐고 뻗음 -->
    <path d="M436 182 Q380 155 310 128" stroke-width="2.5"/>
    <!-- 오른팔: 테이블 위에 -->
    <path d="M464 182 Q480 196 490 208" stroke-width="2.2"/>
  </g>

  <!-- ── 오른쪽: 마이크 ── -->
  <g filter="url(#wc5)" stroke="#1a1a1a" fill="none" stroke-linecap="round">
    <ellipse cx="540" cy="162" rx="13" ry="19" stroke-width="2.0" fill="#ddd8d0" fill-opacity="0.5"/>
    <line x1="534" y1="150" x2="546" y2="150" stroke-width="0.9" opacity="0.55"/>
    <line x1="532" y1="157" x2="548" y2="157" stroke-width="0.9" opacity="0.55"/>
    <line x1="531" y1="164" x2="549" y2="164" stroke-width="0.9" opacity="0.55"/>
    <line x1="532" y1="171" x2="548" y2="171" stroke-width="0.9" opacity="0.55"/>
    <line x1="534" y1="178" x2="546" y2="178" stroke-width="0.9" opacity="0.55"/>
    <line x1="540" y1="181" x2="540" y2="212" stroke-width="2.2"/>
    <line x1="526" y1="212" x2="554" y2="212" stroke-width="2.0"/>
  </g>
</svg>`,

  /* ══ 월요일용 v3 — 배니스터 4분의 벽 — soft watercolor wash ══
     크림 종이 위 수채화: 하늘·트랙 워시, 러너 실루엣, 시계, 테이프, 황금 빛 파티클 */
  6: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" translate="no">
  <defs>
    <!-- 큰 번짐: 배경 워시 -->
    <filter id="wcb" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.022 0.034" numOctaves="4" seed="7" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="22" xChannelSelector="R" yChannelSelector="G" result="d"/>
      <feGaussianBlur in="d" stdDeviation="5.5"/>
    </filter>
    <!-- 중간 번짐: 주요 요소 -->
    <filter id="wc" x="-15%" y="-15%" width="130%" height="130%">
      <feTurbulence type="fractalNoise" baseFrequency="0.032 0.052" numOctaves="4" seed="23" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="14" xChannelSelector="R" yChannelSelector="G" result="d"/>
      <feGaussianBlur in="d" stdDeviation="2.2"/>
    </filter>
    <!-- 작은 번짐: 세부·선 -->
    <filter id="wcs" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.058 0.095" numOctaves="3" seed="41" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="8" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <!-- 순수 블러 -->
    <filter id="bl3"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="bl6"><feGaussianBlur stdDeviation="6"/></filter>
    <filter id="bl10"><feGaussianBlur stdDeviation="10"/></filter>
  </defs>

  <!-- ── 크림 종이 배경 ── -->
  <rect width="600" height="280" fill="#f7f2e8"/>
  <!-- 종이 미세 워시 -->
  <ellipse cx="300" cy="140" rx="340" ry="165" fill="#ede6d8" opacity="0.30" filter="url(#bl10)"/>

  <!-- ── 하늘 수채 워시 (wet-on-wet 3레이어) ── -->
  <ellipse cx="290" cy="68" rx="335" ry="115" fill="#b4d0ea" opacity="0.34" filter="url(#wcb)"/>
  <ellipse cx="175" cy="52" rx="240" ry="88" fill="#a2c4e0" opacity="0.24" filter="url(#wcb)"/>
  <ellipse cx="430" cy="44" rx="195" ry="78" fill="#c5ddf5" opacity="0.22" filter="url(#wcb)"/>
  <!-- 하늘 위 연한 흰 빛 -->
  <ellipse cx="300" cy="18" rx="270" ry="55" fill="#e8f3fc" opacity="0.28" filter="url(#bl10)"/>

  <!-- ── 트랙·땅 수채 워시 ── -->
  <ellipse cx="300" cy="258" rx="315" ry="72" fill="#ddb855" opacity="0.40" filter="url(#wcb)"/>
  <ellipse cx="285" cy="265" rx="272" ry="52" fill="#cc9f3a" opacity="0.28" filter="url(#wcb)"/>
  <ellipse cx="318" cy="254" rx="225" ry="40" fill="#c49030" opacity="0.22" filter="url(#wcb)"/>
  <!-- 트랙 안쪽 연한 녹색 워시 -->
  <ellipse cx="300" cy="240" rx="195" ry="35" fill="#a8c870" opacity="0.12" filter="url(#bl6)"/>
  <!-- 트랙 타원선 -->
  <ellipse cx="300" cy="234" rx="246" ry="50" fill="none" stroke="#b08830" stroke-width="1.4" opacity="0.32" filter="url(#wcs)"/>
  <ellipse cx="300" cy="234" rx="208" ry="37" fill="none" stroke="#b08830" stroke-width="1.0" opacity="0.22" filter="url(#wcs)"/>

  <!-- ── 관중석 흐릿한 색 매스 ── -->
  <ellipse cx="140" cy="178" rx="108" ry="32" fill="#c8b49c" opacity="0.22" filter="url(#bl10)"/>
  <ellipse cx="460" cy="174" rx="105" ry="30" fill="#bca898" opacity="0.20" filter="url(#bl10)"/>
  <ellipse cx="300" cy="168" rx="82" ry="22" fill="#cbbfa8" opacity="0.14" filter="url(#bl10)"/>

  <!-- ── 왼쪽 속도 워시 (지나온 바람, 운동감) ── -->
  <ellipse cx="118" cy="136" rx="112" ry="34" fill="#e4d9c6" opacity="0.48" filter="url(#wcb)"/>
  <ellipse cx="96" cy="118" rx="88" ry="24" fill="#ddd0ba" opacity="0.34" filter="url(#wcb)"/>
  <ellipse cx="128" cy="160" rx="98" ry="22" fill="#e0d4c0" opacity="0.28" filter="url(#wcb)"/>
  <!-- 속도 잉크 스트로크 -->
  <g filter="url(#wcs)" stroke="#a09080" stroke-linecap="round" opacity="0.30">
    <line x1="172" y1="86"  x2="240" y2="93"  stroke-width="2.8"/>
    <line x1="168" y1="106" x2="238" y2="111" stroke-width="2.4"/>
    <line x1="172" y1="126" x2="238" y2="128" stroke-width="2.2"/>
    <line x1="170" y1="146" x2="238" y2="144" stroke-width="1.9"/>
    <line x1="173" y1="72"  x2="235" y2="78"  stroke-width="2.4"/>
    <line x1="170" y1="164" x2="236" y2="160" stroke-width="1.6"/>
  </g>

  <!-- ── 결승 테이프 수채 워시 ── -->
  <!-- 테이프 빛 번짐 -->
  <rect x="234" y="110" width="132" height="20" rx="8" fill="#e03030" opacity="0.20" filter="url(#bl6)"/>
  <!-- 테이프 왼쪽 -->
  <rect x="238" y="118" width="58" height="6" rx="3" fill="#b82020" opacity="0.65" filter="url(#wcs)"/>
  <!-- 테이프 오른쪽 -->
  <rect x="308" y="117" width="60" height="6" rx="3" fill="#b82020" opacity="0.65" filter="url(#wcs)"/>
  <!-- 끊어진 중앙 조각들 -->
  <path d="M 296 112 Q 301 122 306 111 Q 310 120 316 114" fill="none" stroke="#b82020" stroke-width="2" opacity="0.55" filter="url(#wcs)"/>
  <!-- 테이프 그림자 -->
  <rect x="242" y="126" width="116" height="4" rx="2" fill="#902020" opacity="0.12" filter="url(#bl3)"/>

  <!-- ── 러너 실루엣 (수채화 레이어드) ── -->
  <!-- 발 그림자 -->
  <ellipse cx="296" cy="226" rx="48" ry="11" fill="#7a5020" opacity="0.18" filter="url(#bl6)"/>

  <!-- 다리 — 베이스 워시 (넓고 부드러운) -->
  <path d="M 291 138 Q 266 170 248 204 Q 240 220 236 225"
        fill="none" stroke="#6a4228" stroke-width="26" stroke-linecap="round" opacity="0.52" filter="url(#wc)"/>
  <path d="M 291 138 Q 318 166 340 196 Q 349 212 353 218"
        fill="none" stroke="#6a4228" stroke-width="26" stroke-linecap="round" opacity="0.52" filter="url(#wc)"/>
  <!-- 다리 — 중간 톤 -->
  <path d="M 291 138 Q 266 170 248 204 Q 240 220 236 225"
        fill="none" stroke="#8a5a38" stroke-width="14" stroke-linecap="round" opacity="0.38" filter="url(#wcs)"/>
  <path d="M 291 138 Q 318 166 340 196 Q 349 212 353 218"
        fill="none" stroke="#8a5a38" stroke-width="14" stroke-linecap="round" opacity="0.38" filter="url(#wcs)"/>
  <!-- 다리 — 하이라이트 -->
  <path d="M 291 138 Q 266 170 248 204"
        fill="none" stroke="#d4a870" stroke-width="6" stroke-linecap="round" opacity="0.20" filter="url(#bl3)"/>
  <path d="M 291 138 Q 318 166 340 196"
        fill="none" stroke="#d4a870" stroke-width="6" stroke-linecap="round" opacity="0.20" filter="url(#bl3)"/>

  <!-- 몸통 — 베이스 -->
  <path d="M 297 92 Q 292 116 290 138"
        fill="none" stroke="#582e18" stroke-width="30" stroke-linecap="round" opacity="0.60" filter="url(#wc)"/>
  <!-- 몸통 — 중간 톤 -->
  <path d="M 297 92 Q 292 116 290 138"
        fill="none" stroke="#7a4a28" stroke-width="16" stroke-linecap="round" opacity="0.38" filter="url(#wcs)"/>
  <!-- 몸통 하이라이트 -->
  <path d="M 297 92 Q 292 116 290 138"
        fill="none" stroke="#e0b880" stroke-width="7" stroke-linecap="round" opacity="0.18" filter="url(#bl3)"/>

  <!-- 팔 — 베이스 -->
  <path d="M 294 108 Q 262 97 248 118"
        fill="none" stroke="#6a4228" stroke-width="18" stroke-linecap="round" opacity="0.55" filter="url(#wc)"/>
  <path d="M 294 108 Q 330 95 346 114"
        fill="none" stroke="#6a4228" stroke-width="18" stroke-linecap="round" opacity="0.55" filter="url(#wc)"/>
  <!-- 팔 — 중간 톤 -->
  <path d="M 294 108 Q 262 97 248 118"
        fill="none" stroke="#8a5a38" stroke-width="9" stroke-linecap="round" opacity="0.32" filter="url(#wcs)"/>
  <path d="M 294 108 Q 330 95 346 114"
        fill="none" stroke="#8a5a38" stroke-width="9" stroke-linecap="round" opacity="0.32" filter="url(#wcs)"/>

  <!-- 머리 — 베이스 -->
  <circle cx="299" cy="79" r="17" fill="#582e18" opacity="0.65" filter="url(#wc)"/>
  <!-- 머리 — 하이라이트 워시 -->
  <circle cx="295" cy="74" r="10" fill="#e8c090" opacity="0.22" filter="url(#bl6)"/>

  <!-- ── 운동복 컬러 워시 (파란 유니폼) ── -->
  <path d="M 297 98 Q 292 118 290 134"
        fill="none" stroke="#4060a8" stroke-width="10" stroke-linecap="round" opacity="0.28" filter="url(#bl3)"/>
  <path d="M 294 108 Q 262 97 248 118"
        fill="none" stroke="#4060a8" stroke-width="7" stroke-linecap="round" opacity="0.20" filter="url(#bl3)"/>
  <path d="M 294 108 Q 330 95 346 114"
        fill="none" stroke="#4060a8" stroke-width="7" stroke-linecap="round" opacity="0.20" filter="url(#bl3)"/>

  <!-- ── 시계 (청회색 수채) ── -->
  <!-- 외곽 빛 번짐 -->
  <circle cx="494" cy="57" r="48" fill="#80afd0" opacity="0.22" filter="url(#bl10)"/>
  <!-- 시계 배경 워시 레이어 1 -->
  <circle cx="494" cy="57" r="40" fill="#92bcd8" opacity="0.30" filter="url(#wcb)"/>
  <!-- 시계 배경 워시 레이어 2 -->
  <circle cx="490" cy="53" r="34" fill="#aaccdf" opacity="0.24" filter="url(#wcb)"/>
  <!-- 시계 내부 (흰 종이 느낌) -->
  <circle cx="494" cy="57" r="32" fill="#f0f5fa" opacity="0.50" filter="url(#wcs)"/>
  <!-- 시계 테두리 -->
  <circle cx="494" cy="57" r="36" fill="none" stroke="#4878a0" stroke-width="2.5" opacity="0.58" filter="url(#wcs)"/>
  <!-- 눈금 -->
  <g stroke="#386898" stroke-width="2" stroke-linecap="round" opacity="0.62" filter="url(#wcs)">
    <line x1="494" y1="24" x2="494" y2="32"/>
    <line x1="527" y1="57" x2="519" y2="57"/>
    <line x1="494" y1="90" x2="494" y2="82"/>
    <line x1="461" y1="57" x2="469" y2="57"/>
  </g>
  <!-- 시침 (12시 방향, 3분대) -->
  <line x1="494" y1="57" x2="494" y2="28" stroke="#1e3c60" stroke-width="3.2" stroke-linecap="round" opacity="0.75" filter="url(#wcs)"/>
  <!-- 분침 (59초 — 4시 직전) -->
  <line x1="494" y1="57" x2="518" y2="70" stroke="#1e3c60" stroke-width="2.4" stroke-linecap="round" opacity="0.70" filter="url(#wcs)"/>
  <!-- 중심점 -->
  <circle cx="494" cy="57" r="4" fill="#1e3c60" opacity="0.75"/>
  <!-- 3:59 붉은 워시 힌트 (시계 하단) -->
  <ellipse cx="494" cy="100" rx="24" ry="8" fill="#c03030" opacity="0.22" filter="url(#bl6)"/>

  <!-- ── 황금빛 환호 파티클 ── -->
  <circle cx="125" cy="50" r="9" fill="#e8c030" opacity="0.38" filter="url(#wcb)"/>
  <circle cx="147" cy="33" r="6" fill="#f0d040" opacity="0.30" filter="url(#wcb)"/>
  <circle cx="106" cy="67" r="7" fill="#e8c030" opacity="0.26" filter="url(#wcb)"/>
  <circle cx="144" cy="72" r="5" fill="#f0d848" opacity="0.24" filter="url(#wcb)"/>
  <circle cx="165" cy="44" r="4" fill="#f5d840" opacity="0.22" filter="url(#wcb)"/>
  <circle cx="393" cy="38" r="7" fill="#e8c030" opacity="0.32" filter="url(#wcb)"/>
  <circle cx="414" cy="22" r="5.5" fill="#f0d040" opacity="0.27" filter="url(#wcb)"/>
  <circle cx="432" cy="46" r="6" fill="#e8c030" opacity="0.24" filter="url(#wcb)"/>
  <circle cx="450" cy="30" r="4" fill="#f5d840" opacity="0.22" filter="url(#wcb)"/>

  <!-- 파티클 연결 — 잉크 점선 -->
  <g stroke="#c4a020" stroke-width="0.9" opacity="0.28" stroke-linecap="round" filter="url(#wcs)">
    <line x1="125" y1="50" x2="147" y2="33"/>
    <line x1="147" y1="33" x2="165" y2="44"/>
    <line x1="393" y1="38" x2="414" y2="22"/>
    <line x1="414" y1="22" x2="432" y2="46"/>
  </g>

  <!-- ── 지평선 수채 워시 ── -->
  <rect x="40" y="234" width="520" height="3" rx="1.5" fill="#b09060" opacity="0.22" filter="url(#wcs)"/>
</svg>`
};

/* ── Stories ── */
const STORIES = {

  /* ═══ 월요일 — 역사·감동 (PRIMARY: 감동) ═══ */
  1: {
    title: '루스벨트의 거절',
    category: '역사·감동',
    primaryType: '감동',
    types: ['감동', '유머'],
    image: null,
    svgKey: null,
    body: [
      '1902년 11월, 미시시피. 시어도어 루스벨트 대통령이 곰 사냥에 나섰다.',
      '안내인들은 며칠을 흔적을 쫓아다닌 끝에 늙은 흑곰 한 마리를 몰아붙여 버드나무에 밧줄로 묶었다. 대통령이 쏘기 편하도록. 곰은 이미 사냥개에 물려 지쳐 있었다.',
      '루스벨트는 총을 들지 않았다. "이건 스포츠가 아니오." 그는 돌아섰다. 묶인 동물을 쏘는 것은 비겁한 행동이라고 했다. 대신 곰을 고통에서 벗어나게 하기 위해 다른 방법을 지시했다.',
      '다음 날 워싱턴 포스트에 만평이 실렸다. 화가 클리퍼드 베리먼이 그린 그림이었다. 총을 내리고 곰에게서 등을 돌린 루스벨트. 그림 속 곰은 작고 귀여운 모습이었다. 실제로는 130킬로그램이 넘는 흑곰이었지만, 베리먼의 선은 그것을 솜뭉치처럼 만들었다.',
      '뉴욕 브루클린의 장난감 가게 주인 모리스 미치텀이 그 만평을 보았다. 그는 아내 로즈와 함께 솜을 채운 작은 곰 인형을 만들어 진열창에 올려놓았다. 이름표를 달았다. "테디의 곰(Teddy\'s Bear)."',
      '미치텀은 루스벨트에게 편지를 썼다. 대통령의 이름을 써도 되겠냐고. 루스벨트가 답했다. "내 이름이 장난감 곰 사업에 쓸모가 있을지 모르겠지만, 기꺼이 허락합니다."',
      '같은 시기, 독일 기엔겐의 슈타이프 회사에서도 곰 인형이 태어나고 있었다. 마르가레테 슈타이프가 세운 장난감 회사였다. 그녀의 조카 리하르트가 동물원에서 곰을 스케치하고 돌아와 인형을 만들었다. 1903년 라이프치히 박람회에서 미국 바이어가 이 곰 인형을 보고 그 자리에서 3,000개를 주문했다.',
      '미국과 독일에서 서로의 존재를 모른 채 거의 동시에 태어난 곰 인형. 두 나라 모두 그것을 자신들이 먼저 만들었다고 주장했다. 어느 쪽이 먼저인지는 지금도 논쟁 중이다.',
      '루스벨트는 거친 사람이었다. 스페인-미국 전쟁 때 직접 기병대를 이끌었고, 악수가 너무 세서 상대방 손을 못 쓰게 만들었다고 전해진다. 노벨 평화상을 받은 최초의 미국인이었고, 국립공원 제도를 만들어 2억 에이커의 땅을 보호구역으로 지정했다. 그런 사람이 묶인 곰을 쏘는 것을 거부했다.',
      '테디 베어는 단순한 장난감이 아니었다. 제1차 세계대전 때 영국 병사들은 참호 속에 작은 곰 인형을 가지고 다녔다. 영국 작가 A.A. 밀른의 아들 크리스토퍼 로빈이 자신의 곰 인형에게 "위니(Winnie)"라는 이름을 붙였다. 아버지 밀른은 그 이름을 따 이야기를 썼고, 그것이 곰돌이 푸(Winnie-the-Pooh)가 됐다.',
      '심리학자들은 테디 베어가 아이에게 애착 대상을 제공한다고 설명한다. 부모가 없는 밤, 낯선 공간, 무서운 어둠 속에서 곰 인형은 아이 곁에 있었다. 100년이 지난 슈타이프 초기 인형은 경매에서 수천만 원에 팔린다. 한 번도 버려지지 않은 곰들이 박물관에 들어가 있다.',
      '곰이 살아남은 그날 이후, 세계 곳곳의 아이들은 어두운 밤을 함께 보낼 곰 인형을 갖게 됐다. 루스벨트는 그날 자신이 무엇을 시작했는지 몰랐다. 그저 할 수 없다고 했을 뿐이었다.',
      '작은 거절 하나가 120년이 넘도록 아이들을 위로하고 있다. 그것이 의도된 결과가 아니었다는 사실이 더 이상하게 아름답다.'
    ],
    closing: '묶인 곰을 쏘기를 거부했다.\n그 거절이 인형이 됐다.\n120년 넘도록\n아이들과 잠든 곰이 됐다.',
    analysis: {
      insight: { icon: '💡', text: '힘이 있는 자리에서 하는 거절이 가장 크게 울린다 — 대통령의 "아니오" 한 마디가 문화가 됐다.',
                 condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
      humor:   { icon: '😄', text: '전쟁을 이끈 대통령이 곰 앞에서 총을 내렸다.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '그 곰이 120년 동안 아이들 곁에 있었다.',
                 condition: '아주 작은 순간이 사실 전부였던 이야기' }
    },
    source: {
      type: '실화',
      credit: '시어도어 루스벨트(Theodore Roosevelt, 1858–1919) / Clifford Berryman 만평 《Drawing the Line in Mississippi》(Washington Post, 1902)를 바탕으로 재서술했습니다.',
    },
    curatorNote: '묶인 곰을 쏘기 거부한 것이 인형을 낳았다는 것이 오래 남습니다. 루스벨트는 그날 그것이 어떤 결과를 낳을지 몰랐을 겁니다. 그냥 못 하겠다고 했을 뿐이겠지요. 그 "못 하겠다"가 세상에서 가장 많이 팔린 장난감이 됐습니다.',
    qna: {
      question: '당신이 그냥 지나칠 수 있었는데 못 하겠다고 했던 순간이 있나요? 원칙이 아니라 그냥 마음이 그랬던 것.',
      answer: '루스벨트는 묶인 곰을 쏘지 않았습니다. 규칙이 있어서가 아니었습니다. 그냥 그렇게 하기 싫었던 것입니다. 그 감각이 테디 베어가 됐습니다. 때로 가장 작은 마음이 가장 오래 남는 것을 만듭니다.'
    },
    publishedDate: '2026년 4월 13일',
  },

  /* ═══ 화요일 — 철학·역사 (PRIMARY: 통찰) ═══ */
  2: {
    title: '악의 평범성',
    category: '철학·역사',
    primaryType: '통찰',
    types: ['통찰'],
    image: null,
    svgKey: null,
    body: [
      '1961년 4월, 예루살렘. 법정 한가운데 유리 부스가 있었다. 그 안에 아돌프 아이히만이 앉아 있었다.',
      '아이히만은 나치 친위대 중령이었다. 수백만 명을 아우슈비츠로 보낸 수송 작전의 실무 책임자. 이스라엘 정보기관 모사드가 1960년 아르헨티나에서 그를 찾아내 예루살렘으로 데려왔다.',
      '한나 아렌트는 《뉴요커》 특파원으로 재판을 참관했다. 그녀는 괴물을 볼 것이라 생각했다. 수백만 명의 죽음을 기획한 악마 같은 인물을.',
      '그러나 유리 부스 안에 있는 것은 평범한 중년 남자였다. 두꺼운 안경. 경직된 자세. 그는 말할 때마다 상투어를 늘어놓았다. "명령에 따랐을 뿐입니다." "저는 단지 기차 시간표를 관리했습니다." 자신의 언어로 생각하지 않는 사람이었다.',
      '아렌트는 주목했다. 아이히만은 거짓말하는 것이 아니었다. 그는 실제로 자신이 옳다고 느꼈다. 히틀러의 명령이 법이었고, 그는 법을 따른 것이었다. 자신의 행동이 어떤 결과를 낳는지 단 한 번도 스스로 생각해보지 않은 사람이었다.',
      '아렌트는 이것을 "악의 평범성(Banality of Evil)"이라 불렀다. 거대한 악은 반드시 거대한 악인을 필요로 하지 않는다. 그저 생각하지 않는 사람들이 있으면 된다.',
      '이 개념은 폭발적인 반응을 불러왔다. 유대인 지식인 사회가 격렬하게 반박했다. 아이히만을 평범한 인간으로 묘사함으로써 책임을 희석시켰다는 것이었다. 오랜 친구들과 절교하는 일도 생겼다.',
      '그러나 아렌트는 물러서지 않았다. "악의 평범성은 아이히만의 무죄를 뜻하는 것이 아닙니다. 그는 마땅히 처형되어야 했습니다. 그러나 그가 괴물이 아니라는 사실이 더 무섭습니다."',
      '아이히만은 1962년 5월 31일 교수형에 처해졌다. 마지막 말도 상투어였다. "우리는 모두 죽어야 합니다. 이것이 삶의 법칙입니다."',
      '아렌트의 질문은 지금도 유효하다. 생각하지 않는 것 — 그것이 어디까지 이어질 수 있는가.'
    ],
    closing: '괴물을 기다렸지만\n평범한 남자가 왔다.\n생각하지 않았을 뿐이라고\n그는 끝까지 말했다.',
    analysis: {
      insight: { icon: '💡', text: '사유의 거부가 가장 큰 악이 된다 — 생각하지 않는 것은 중립이 아니다.',
                 condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
      humor:   { icon: '😄', text: '역사상 최대의 범죄 재판에서 피고가 한 말 — "저는 기차 시간표를 관리했습니다."',
                 condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
      emotion: { icon: '❤️', text: '그것이 괴물이 아니었다는 사실이 더 무섭다.',
                 condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
    },
    source: {
      type: '실화',
      credit: '한나 아렌트(Hannah Arendt, 1906–1975) / 《예루살렘의 아이히만》(Eichmann in Jerusalem, 1963, Viking Press)을 바탕으로 재서술했습니다.',
    },
    curatorNote: '"그가 괴물이 아니라는 사실이 더 무섭습니다." 아렌트의 이 말이 오래 남습니다. 우리가 악을 특별한 사람의 문제로 여기는 한, 우리 자신은 안전하다고 착각할 수 있습니다. 생각하지 않는 것 — 그것이 얼마나 무서운 것인지.',
    qna: {
      question: '당신이 "그냥 하라고 해서 했을 뿐"이라고 말한 적이 있나요? 그 말을 할 때 무언가를 멈추지 않은 것은 아닌가요?',
      answer: '아이히만은 명령을 따랐고, 법을 따랐습니다. 그러나 아렌트는 그 복종이 생각의 포기였다고 봤습니다. 스스로 생각하는 것 — 그것이 가장 기본적인 도덕적 행위일 수 있습니다.'
    },
    publishedDate: '2026년 4월 14일',
  },

  /* ═══ 수요일 — 역사·유머 (PRIMARY: 유머) ═══ */
  3: {
    title: '제 사망 보도는 과장되었습니다',
    category: '역사·유머',
    primaryType: '유머',
    types: ['유머', '통찰'],
    image: null,
    svgKey: null,
    body: [
      '1895년, 마크 트웨인은 파산했다. 그가 투자한 자동 식자기 회사가 무너진 것이었다. 부채는 당시 돈으로 10만 달러가 넘었다.',
      '57세에 빚을 갚기 위해 세계 강연 여행을 떠났다. 오스트레일리아, 뉴질랜드, 인도, 남아프리카. 1년 넘게 세계를 돌았다.',
      '1896년 8월, 강연 중에 소식이 왔다. 딸 수지가 뇌막염으로 죽었다. 아버지가 바다 건너 있을 때였다. 트웨인은 런던 집에 칩거했다.',
      '1897년 봄, 미국 신문들에 소문이 퍼졌다. 마크 트웨인이 런던에서 병들어 죽어가고 있다는 것. 일부 신문은 이미 사망했다고 보도했다.',
      '뉴욕 저널 기자 프랭크 마셜 화이트가 확인을 위해 트웨인의 런던 집을 찾아왔다. 문을 연 트웨인은 멀쩡했다.',
      '트웨인이 말했다. "제 사망 보도는 크게 과장되었습니다.(The report of my death was an exaggeration.)"',
      '이 문장은 다음 날 신문에 실렸다. 그리고 이후 100년 넘게 인용되는 역사상 가장 유명한 한 줄 중 하나가 됐다.',
      '그는 그 무렵 실제로 힘든 시간을 보내고 있었다. 딸을 잃었고, 빚을 갚으러 다니고 있었다. 그러나 자신의 부고 앞에서 그는 한 문장으로 끝냈다.',
      '트웨인은 그것이 유머라고 생각하지 않았을지 모른다. 그냥 사실을 말한 것이었다. 나는 살아있다. 보도는 틀렸다. 그러나 그 단호한 담담함이 유머가 됐다.',
      '가장 어두운 시간에 가장 가볍게 말할 수 있는 것 — 그것이 트웨인식 생존이었다.'
    ],
    closing: '"제 사망 보도는\n크게 과장되었습니다."\n딸을 잃고, 빚을 지고\n런던에 있던 그의 한 문장.',
    analysis: {
      insight: { icon: '💡', text: '유머는 현실을 부정하는 것이 아니라, 현실을 다르게 바라보는 것이다.',
                 condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
      humor:   { icon: '😄', text: '살아있는 사람이 자신의 부고에 반박하는 방법 — 한 문장.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '가장 힘든 시기에 나온 가장 가벼운 문장.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '마크 트웨인(Mark Twain, 1835–1910) / Frank Marshall White 인터뷰 기록(New York Journal, 1897)을 바탕으로 재서술했습니다.',
    },
    curatorNote: '"제 사망 보도는 크게 과장되었습니다." 딸을 잃고, 빚 때문에 세계를 돌고 있던 시기에 나온 말입니다. 힘든 상황을 감추거나 과장하지 않고, 그냥 한 문장으로 정리했습니다. 유머는 가벼움이 아니라 단단함에서 나오는 것 같습니다.',
    qna: {
      question: '힘든 상황에서 가볍게 말할 수 있었던 적이 있나요? 그 가벼움이 어디서 나왔는지 아시나요?',
      answer: '트웨인이 그 문장을 쓴 시기는 그의 가장 어두운 시간이었습니다. 그러나 그는 단 한 문장으로 자신이 살아있음을 증명했습니다. 유머가 현실 도피가 아닐 때, 그것은 살아있다는 신호입니다.'
    },
    publishedDate: '2026년 4월 15일',
  },

  /* ═══ 목요일 — 과학·역사 (PRIMARY: 통찰) ═══ */
  4: {
    title: '절망적인 행동',
    category: '과학·역사',
    primaryType: '통찰',
    types: ['통찰'],
    image: null,
    svgKey: null,
    body: [
      '1900년 가을, 막스 플랑크는 막혀 있었다. 수십 년 동안 물리학자들을 괴롭혀 온 문제였다.',
      '뜨겁게 달궈진 물체는 빛을 낸다. 쇠를 달구면 처음에는 붉게, 더 뜨거워지면 노랗게, 흰빛으로 변한다. 왜 그런가. 고전물리학으로 설명하려 하면 이상한 결과가 나왔다. 짧은 파장에서 에너지가 무한히 커져야 한다는 것이었다. 물리학자들은 이것을 "자외선 파국(ultraviolet catastrophe)"이라 불렀다.',
      '플랑크는 고전물리학의 신봉자였다. 뉴턴과 맥스웰의 세계. 에너지는 연속적으로 흐른다고 그는 믿었다.',
      '그러나 수식이 맞지 않았다. 플랑크는 "수학적 속임수"를 써보았다. 에너지가 연속으로 흐르지 않고 작은 덩어리로 끊어서 나온다고 가정하면 어떨까. 아무 물리적 근거 없는 가정이었다. 그냥 해본 것이었다.',
      '수식이 맞았다. 완벽하게.',
      '플랑크는 이것을 "절망적인 행동(an act of desperation)"이라고 불렀다. 고전물리학으로 해결하려고 안간힘을 쓰다가, 도저히 안 되니까 물리적 의미도 모른 채 써본 숫자 조작이었다.',
      '그는 평생 이 "속임수"를 고전물리학으로 설명하려 노력했다. 누군가 제대로 설명해줄 것이라 믿었다. 그러나 아인슈타인이 광전 효과를 설명하면서 플랑크의 양자 개념을 가져다 썼다. 보어가 원자 구조에 적용했다. 하이젠베르크, 슈뢰딩거가 이어받았다.',
      '플랑크의 "속임수"는 양자역학이 됐다. 그가 평생 믿어온 고전물리학의 세계는 그 "속임수"에 의해 무너졌다. 자신이 발견하고 싶지 않았던 것을 발견한 것이었다.',
      '플랑크는 1947년 89세로 죽었다. 양자역학의 시대가 완전히 열리는 것을 지켜보면서. 자신이 찾고 싶었던 세계는 오지 않았다. 대신 자신이 만든 세계가 왔다.',
      '"나는 혁명가가 아니었습니다. 나는 다만 막혔습니다."'
    ],
    closing: '"나는 혁명가가 아니었습니다.\n나는 다만 막혔습니다."\n그 막힌 자리에서\n양자역학이 태어났다.',
    analysis: {
      insight: { icon: '💡', text: '발견은 찾는 것에서 오지 않을 때가 있다 — 막혀서 아무렇게나 써본 것이 진실이 됐다.',
                 condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
      humor:   { icon: '😄', text: '20세기 물리학 혁명의 출발점 — "그냥 해본 것이었습니다."',
                 condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
      emotion: { icon: '❤️', text: '자신이 믿어온 세계를 자신이 무너뜨린 것 — 그것을 안고 89년을 살았다.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '막스 플랑크(Max Planck, 1858–1947) / Abraham Pais 《Subtle is the Lord: The Science and the Life of Albert Einstein》(1982, Oxford University Press) 및 플랑크 자서전을 바탕으로 재서술했습니다.',
    },
    curatorNote: '"절망적인 행동." 플랑크가 자신의 발견을 직접 이렇게 불렀습니다. 자랑이 아니라 고백이었습니다. 막혔을 때 아무렇게나 써본 것이 세상을 바꾼 것이 됐다는 것. 혁명은 혁명가가 아니라 막힌 사람에게서 나올 때가 있습니다.',
    qna: {
      question: '막혀서 그냥 해본 것이 의외로 잘 됐던 적이 있나요? 그때 당신은 그것이 뭔지 알았나요?',
      answer: '플랑크는 자신이 발견한 것의 의미를 몰랐습니다. 그저 수식이 맞았을 뿐이었습니다. 의미는 나중에 왔습니다. 때로 가장 중요한 발견은 발견하는 순간에 발견인 줄 모릅니다.'
    },
    publishedDate: '2026년 4월 16일',
  },

  /* ═══ 금요일 — 역사·감동 (PRIMARY: 감동) ═══ */
  5: {
    title: '친애하는 갈취범에게',
    category: '역사·감동',
    primaryType: '감동',
    types: ['감동', '통찰'],
    image: null,
    svgKey: null,
    body: [
      '1991년 1월, 팔레르모. 리베로 그라씨의 전화가 울렸다. "우리를 압니다. 이번 달 안에 돈을 내놓으시오."',
      '피초(pizzo). 시칠리아에서 마피아에 내는 보호비였다. 팔레르모 상인의 80퍼센트 이상이 매달 갔다. 내지 않으면 가게가 불타거나 사람이 다쳤다. 모두가 알았다. 모두가 참았다.',
      '그라씨는 파자마 공장을 운영하고 있었다. 직원 100명. 그는 전화를 끊었다. 그리고 신문사에 전화를 걸었다.',
      '1991년 1월 10일, 팔레르모 지역 신문 《지오르날레 디 시칠리아》에 편지가 실렸다. 제목은 "친애하는 갈취범에게(Caro estortore)." 리베로 그라씨가 마피아에게 공개적으로 쓴 편지였다.',
      '편지는 정중하고 단호했다. "우리는 당신들의 요구에 따르지 않겠습니다. 우리 사업을 합법적으로 운영할 권리가 있습니다." 그는 다른 팔레르모 상인들도 함께해달라고 호소했다.',
      '아무도 나서지 않았다. 두려움이 더 컸다.',
      '그라씨는 계속 공장을 열었다. 경찰이 보호를 제안했다. 받았다. 그러나 협박 전화는 계속됐다.',
      '1991년 8월 29일 아침, 그라씨는 팔레르모 집 앞에서 총에 맞아 숨졌다. 59세였다. 팔레르모의 상인들은 여전히 피초를 냈다. 당장 바뀐 것은 없었다.',
      '2004년, 팔레르모의 젊은이 몇 명이 밤새 도시 곳곳에 스티커를 붙였다. "피초를 내는 국민 전체는 존엄 없는 국민이다." 그들은 모임을 만들었다. 이름은 "아디오피초(Addiopizzo — 피초여 안녕)".',
      '2010년까지 500개 이상의 팔레르모 상점이 공개적으로 피초 거부를 선언했다. 수천 명의 시민이 그 상점에서만 물건을 샀다. 오늘날 아디오피초 목록에는 1,000개 이상의 상점이 있다.',
      '그라씨가 혼자 쓴 한 통의 편지가, 10년 후 1,000개의 문을 열었다.'
    ],
    closing: '혼자였다.\n아무도 함께하지 않았다.\n그가 죽고 10년 후\n1,000개의 문이 열렸다.',
    analysis: {
      insight: { icon: '💡', text: '"아니오"는 혼자 말할 때도 유효하다 — 혼자였기 때문에 더 오래 울렸다.',
                 condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
      humor:   { icon: '😄', text: '마피아에게 쓴 편지 제목 — "친애하는 갈취범에게."',
                 condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
      emotion: { icon: '❤️', text: '혼자였고, 죽었고, 10년 후에 1,000개가 됐다.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '리베로 그라씨(Libero Grassi, 1932–1991) / Addiopizzo 공식 기록 및 《지오르날레 디 시칠리아》 원문(1991.1.10)을 바탕으로 재서술했습니다.',
    },
    curatorNote: '"친애하는 갈취범에게." 이 제목이 오래 남습니다. 두려운 상대에게 정중하게, 그러나 공개적으로 쓴 편지. 아무도 따르지 않았고, 그는 죽었습니다. 그러나 10년 후 1,000개의 상점이 열렸습니다. 혼자라는 것이 마지막이 아닐 때가 있습니다.',
    qna: {
      question: '아무도 함께하지 않는데 혼자 "아니오"라고 말한 적이 있나요? 그때 무엇이 당신을 그 자리에 있게 했나요?',
      answer: '그라씨는 아무도 따르지 않는 것을 알면서도 편지를 썼습니다. 그 선택이 그를 죽게 했고, 10년 후 운동을 만들었습니다. 혼자 하는 "아니오"는 그 순간에는 외롭지만, 나중에 가장 큰 소리가 될 때가 있습니다.'
    },
    publishedDate: '2026년 4월 17일',
  },

    /* ═══ 토요일 — 에세이·일상 (PRIMARY: 통찰) ═══ */
      6: {
    'title': '집 안의 집',
    'category': '에세이·일상',
    'primaryType': '통찰',
    'types': ['통찰', '감동'],
    'image': 'images/집 안의 집.png',
    'svgKey': null,
    'body': [
          '집 안에 집이 하나 더 생겼다.',
          '좌을 해도 이불, 베개뿐만 아니라 벽과 문도 있고 심지어 조명도 갖춰었으니 집이 확실하다. 게다가 과자, 장난감, 책, 카드, 인형 등 나름 소중한 것들이 가득한 걸 보니, 막내가 뗤 살림 차린 게 분명하다. 막내가 거실 한구석에 자기만의 집을 지은 것이다.',
          '그대로 떠서 길거리로 옆겨놓으면 영낙없는 노숙자 살림이 될 것체럼 지저분하게 보인다. 그 위치도 뗁 거실과 현관의 중간 그러니까 여길 지나야 화장실을 들락날락할 수 있기 때문에 성가시기 짝이 없다. 집 청소도 해야 하고 가끌씩 손님도 오는데, 막내 집이 얼마나 오래 버틸 수 있을지 걱정이 앞선다.',
          '그래도 온 가족이 불편을 참으며 막내의 집을 부수지 않는 이유는 우선 철거민의 완강한 저항이 눈에 선하기 때문이다.',
          '그대로 내버려 두는 또 다른 이유는 이제 막내도 자기만의 공간을 가질 때가 된 것 같다고 여기기 때문이다. 첫째도 둘째돀 자기 방이 있는데, 초등학교 1학년인 막내는 아직 그렇지가 못하다. 방이 주어진다 한들 잠잤 때는 무서워서 엄마 아빠한테 달려올 게 뿔하지만, 자기만의 공간을 갖기 위한 탐색기로 접어든 것만큼는 분명해 보인다.',
          '이런 식으로 우리 모두는 어릴 때 자기만의 공간을 가꾸어 본 기억이 있다. 널따란 천이나 이불을 이용해서 덮개를 만든다. 그런 후에 내가 아끼는 물건들로 그곳을 가득 채워 보고, 친한 친구들을 초대하기도 한다. 이곳은 내가 하고 싶은 모든 것이 허용되는 곳이고, 아무나 들어올 수 없는 곳이다. 철저하게 비밀스런 곳은 아닐지라돀, 남들이 모르는 것들이 간직되는 곳이다. 완전히 독립적이진 않더라돀, 독립성에 기초한 개인의 정체성이 비로소 생겨나는 곳이다.',
          '막내의 집은 비밀번호를 말해야 들어갈 수 있을 정돀로 다른 곳과 똑렇이 단절되어 있고, 워낙 좀다 보니 자신 말고는 누구돀 들어갈 수 없을 정도로 출입이 제한되어 있다. 그리고 이곳에서는 다른 가족이 알 수 없는 그만의 자유와 비밀이 싹튜다. 그야말로 이곳은 또 다른 하나의 세계다.',
          '그렇다. 이 집은 막내에게 또 다른 세계를 선사한다. 따라서 이 집을 함부로 부수면 안 된다.',
          '우리는 자라면서 집 안에서 집을 짓든지 또는 내 방을 얻든지 하며 나만의 세계를 경험하다가, 커서는 집 밖에 또 다른 집을 지어 자기만의 세계를 구축한다. 그리고 다음에 더 크게 되면 그러니까 내 집뿐만 아니라 이 세계가 우리의 안식처라는 걸 인식하게 되면, 내 집과 남의 집이 잘 어울리면 좋겠다고 생각하게 되고, 이 세상을 아름답게 만드는 것돀 내 집을 멋지게 짓는 것만큼나 값지다는 걸 깨닫게 된다.',
          '결국 이 세상이 우리의 집과 같다면, 어려서 집 안에 집 짓기와 커서 집 밖에 집 짓기가 일맥상통하는 일이다. 그래서 집 안에 집을 멋지게 지어본 아이가 그 이후의 일들돀 잘 해내리라는 기대를 해보게 된다.',
          '그렇다면 막내 집을 더더욱 부수면 안 된다. 더 아름답고 조화로운 집을 짓돀록 격려하지는 못할망정러…….'
        ],
        closing: '막내가 거실에 집을 지었다.\n비밀번호가 있고, 소중한 것들이 가득하다.\n이 세상이 우리의 집이라면\n그 집을 함부로 부수면 안 된다.',
        analysis: {
          insight: { icon: '💡', text: '집 안의 집은 정체성이 싹트는 곳 — 내 공간을 가져야 비로소 내 세계가 생긴다.',
                     condition: '작은 것이 사실 전부였음이 드러날 때' },
          humor:   { icon: '😄', text: '거실 한구석 노숙자 살림 같은 집 — 비밀번호 없이는 들어갈 수 없다.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '막내의 집을 부수지 못하는 것 — 그것이 더 큰 세계를 향한 첫 번째 집이기 때문에.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '에세이',
          credit: 'SCJ / blog.naver.com/scjoe',
        },
        curatorNote: '‘이 집을 함부로 부수면 안 된다.’ 거실 한구석에 이불 몇 장으로 지은 집 앞에서 한 말입니다. 그 작은 공간이 비밀번호가 있고, 자유가 있고, 나만의 세계가 싹트는 곳이라는 것. 어릴 때 지어본 집 안의 집이 커서 짓는 집의 시작이라는 생각이 오래 남습니다.',
        publishedDate: '2026년 4월 18일'
      }
};

/* ──────────────────────────────────────────────────────────
   STORY_ARCHIVE  ·  지난 주 이야기 모음
   새 주 시작 시: 이번 주 STORIES 내용을 복사해 새 항목으로 추가 후 배포
   형식: { weekLabel: '2026년 3월 첫째 주', stories: { 1:{...}, 2:{...}, ... } }
   ────────────────────────────────────────────────────────── */
const STORY_ARCHIVE = [
  {
    weekLabel: '2026년 4월 2주 (4/6–4/11)',
    weekStart: '2026-04-06',
    stories: {
      1: {
        title: '마더 테레사의 어둠',
        category: '역사·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '1979년 12월 10일, 오슬로. 마더 테레사는 노벨평화상 수상 연설을 했다. "이 상을 가난한 사람들의 이름으로 받겠습니다."',
          '전 세계가 그녀를 보았다. 작은 체구, 흰 사리, 굳은 표정. 믿음의 화신. 흔들리지 않는 사람. 모두가 그렇게 생각했다.',
          '2007년, 테레사 수녀가 세상을 떠난 지 10년 후, 책 한 권이 출판됐다. 제목은 《Come Be My Light(나의 빛이 되어라)》. 브라이언 콜로디에이추크 신부가 편집했다. 테레사가 생전에 고해신부들에게 쓴 편지들을 모은 것이었다.',
          '세상은 충격을 받았다. "예수님이 나를 원하지 않는 것 같습니다." "믿음이 없습니다. 사랑도 느끼지 못합니다." "하느님은 어디 계십니까? 어둠뿐입니다."',
          '이 어둠은 일시적인 것이 아니었다. 1948년 수녀원을 떠나 캘커타 빈민가로 간 이후, 죽기 직전까지 거의 50년이었다. 테레사는 이것을 "내 영혼의 어두운 밤"이라고 불렀다. 편지에서 그녀는 신부들에게 말했다. "이것을 아무에게도 말하지 마세요."',
          '그 편지들을 받은 신부들은 공개를 만류했다. 테레사 본인도 "태워버려 달라"고 했다. 그러나 결국 "하느님의 뜻에 맡긴다"고 했다. 그 결정을 내리고 얼마 지나지 않아 세상을 떠났다.',
          '편지가 공개되자 사람들은 두 가지로 나뉘었다. "믿음도 없는 사람이 성인이 됐다"는 쪽과, "믿음이 없는데도 50년을 그렇게 살았다"는 쪽이었다.',
          '그러나 그 50년 동안 테레사는 매일 캘커타 빈민가로 나갔다. 죽어가는 사람들 곁에 앉았고, 손을 잡았고, 음식을 먹였다. 1950년 설립한 사랑의 선교회는 40년 후 전 세계 120개 나라에 610개 지부를 두게 됐다.',
          '믿음을 느끼지 못하면서, 사랑을 느끼지 못하면서 했다. 느끼지 못하는데도 갔다. 그것을 믿음이라고 불러야 할지, 의지라고 불러야 할지, 아니면 다른 무언가라고 불러야 할지 모르겠다.',
          '빛을 나눠주던 사람이 혼자 어둠 속에 있었다. 그리고 그 어둠을 아무에게도 말하지 않고, 매일 가난한 사람들 곁으로 나갔다.'
        ],
        closing: '빛을 나눠주던 사람이\n혼자 어둠 속에 있었다.\n그 어둠을 아무에게도 말하지 않고\n매일 가난한 사람들 곁으로 나갔다.',
        analysis: {
          insight: { icon: '💡', text: '믿음은 느끼는 것이 아니라 행하는 것이다 — 50년간 믿음을 느끼지 못하면서도 믿음의 삶을 살았다.', condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '세상이 가장 믿음 깊은 사람으로 알고 있던 수녀가 50년간 의심 속에 있었다.', condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
          emotion: { icon: '❤️', text: '"이것을 아무에게도 말하지 마세요" — 그 어둠을 혼자 안고 50년을 살았다.', condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: { type: '실화', credit: '마더 테레사(Mother Teresa, 1910–1997) / Brian Kolodiejchuk 편집 《Mother Teresa: Come Be My Light》(2007, Doubleday)를 바탕으로 재서술했습니다.' },
        curatorNote: '50년간 믿음을 느끼지 못했다고 썼습니다. 그러나 그 어둠 속에서도 매일 빈민가로 나갔습니다. 어쩌면 그것이 진짜 믿음의 모습인지 모릅니다. 느껴서 가는 것이 아니라, 느끼지 못해도 가는 것.',
        qna: { question: '당신이 확신 없이, 감각 없이 그냥 계속해온 것이 있나요? 느끼지 못하는데도 멈추지 않은 것.', answer: '테레사 수녀는 하느님을 느끼지 못하면서도 50년을 하느님의 일을 했습니다. 믿음이 사라진 자리에서도 행동이 남았습니다. 그것이 어쩌면 가장 순수한 형태의 헌신일 수 있습니다.' },
        publishedDate: '2026년 4월 6일',
      },
      2: {
        title: '몽테뉴의 탑',
        category: '철학·역사',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1571년 2월 28일, 미셸 드 몽테뉴의 38번째 생일. 그는 보르도 지방법원 판사직을 내려놓았다. 그리고 자신의 영지로 돌아갔다.',
          '몽테뉴 성의 탑 꼭대기에는 작은 원형 방이 있었다. 세 개의 창문이 각각 다른 방향을 향했다. 그는 벽과 천장 들보에 그리스 격언과 라틴 격언 54개를 직접 새겨 넣었다.',
          '그리고 썼다. 주제는 자신이었다. "나는 세상에서 내가 가장 잘 아는 것을 공부한다. 그것은 나다."',
          '그가 쓴 것들은 기묘했다. 말에서 떨어진 이야기, 고양이가 자신과 놀고 있는 건지 자신이 고양이와 놀고 있는 건지 모르겠다는 생각, 잠들면서 무엇을 느끼는지, 자신이 먹는 음식에 대한 감상. 이것이 《수상록(Essais)》이었다.',
          '"에세이(essay)"라는 단어는 프랑스어 "에세(essai, 시도)"에서 왔다. 몽테뉴가 사실상 만들어낸 장르였다. 결론을 내리지 않는 글. 생각이 흘러가는 대로 쓰는 글. 완성되지 않아도 되는 글.',
          '그는 탑 방에서 20년 넘게 썼다. 판결을 내리는 사람이 아니라 생각하는 사람으로. 그 방에서 움직이지 않으면서 시간, 고통, 우정, 죽음, 경험에 대해 썼다.',
          '그 기묘한 책은 이후 거의 모든 작가에게 영향을 미쳤다. 셰익스피어가 읽었고, 에머슨은 "이 책을 읽으면 내가 쓴 것 같다"고 했다. 파스칼은 몽테뉴를 평생 비판했다 — 그것 자체가 영향이었다.',
          '몽테뉴는 말년에 신장 결석으로 극심한 고통을 겪었다. 그러나 "고통도 내가 공부하는 주제 중 하나"라고 했다. 그는 글을 쓰면서 통증을 견뎠다.',
          '1592년, 59세에 미사 중에 세상을 떠났다. 탑 방은 지금도 남아 있다. 들보의 격언들도 남아 있다. 그가 38세에 혼자 앉아 자신을 들여다보던 그 방.',
          '"나의 주제는 나다. 그러나 그것은 자기중심이 아니다. 나를 들여다보면 인간이 보인다. 인간을 들여다보면 나를 만난다."'
        ],
        closing: '38세에 판사직을 내려놓고\n탑 꼭대기 방에 들어갔다.\n그가 탐구한 것은 자신이었다.\n그리고 그것이 인간이었다.',
        analysis: {
          insight: { icon: '💡', text: '나를 들여다보는 것이 인간을 들여다보는 것이다 — 가장 좁은 주제가 가장 넓은 탐구였다.', condition: '주체와 객체가 뒤바뀌는 순간' },
          humor:   { icon: '😄', text: '"내 주제는 나다" — 철학의 주제가 자기 자신이라고 선언한 철학자.', condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
          emotion: { icon: '❤️', text: '탑 방에서 20년. 그 방이 지금도 남아 있다.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '미셸 드 몽테뉴(Michel de Montaigne, 1533–1592) / Sarah Bakewell 《How to Live: Or A Life of Montaigne》(2010, Other Press)를 바탕으로 재서술했습니다.' },
        curatorNote: '"내 주제는 나다"는 말이 오래 남습니다. 자기중심적으로 들리지만 실제로는 그 반대였습니다. 자신을 솔직하게 들여다볼수록 인간 전체가 보인다는 것. 몽테뉴는 그것을 탑 방에서 혼자 증명했습니다.',
        qna: { question: '자신에 대해 솔직하게 들여다본 적이 있나요? 부끄럽거나 불편한 것도 포함해서.', answer: '몽테뉴는 자신의 게으름, 두려움, 모순을 숨기지 않고 썼습니다. 그것이 500년이 지난 후에도 읽히는 이유입니다. 인간은 자신의 부끄러운 부분까지 솔직하게 드러낼 때, 비로소 다른 인간과 연결됩니다.' },
        publishedDate: '2026년 4월 7일',
      },
      3: {
        title: '가우디의 마지막 전차',
        category: '예술·역사',
        primaryType: '유머',
        types: ['유머', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1926년 6월 7일 오후, 바르셀로나 그란 비아 거리. 늙은 노인 하나가 전차에 치였다. 낡은 검은 옷에 헝클어진 수염. 신발은 다 닳아 있었다. 지갑도 없었다.',
          '택시 세 대가 그를 태우기를 거부했다. 돈 없는 노인처럼 보였기 때문이다. 결국 행인들이 들쳐업고 가까운 산크루 빈민 병원으로 데려갔다.',
          '병원에서도 처음에는 거지 환자로 취급됐다. 의사들은 대충 봤다. 나중에야 사람들이 그의 얼굴을 알아봤다. 안토니 가우디. 40년 이상 사그라다 파밀리아를 짓고 있는 건축가였다.',
          '카탈루냐 지방 정부와 성당 위원회가 달려왔다. 더 나은 병원으로 옮기겠다고 했다. 가우디가 말했다. "나는 가난한 사람들 곁에서 죽겠소." 거부했다. 3일 후, 6월 10일에 숨을 거뒀다.',
          '가우디는 말년에 모든 것을 사그라다 파밀리아에 쏟아붓고 있었다. 보수도 거의 받지 않았다. 직접 거리에서 기부금을 모았다. 낡은 옷을 입고 돌아다닌 것은 검소해서가 아니라, 그것이 그의 생활 방식이었다.',
          '그는 성당 지하에서 생활하기도 했다. 작업실을 성당 안에 차렸다. 마지막 몇 년은 거의 성당 안에서만 살았다. 그가 죽기 직전 관리인이 물었다. "선생님, 오늘은 무엇을 드셨습니까?" 가우디는 잠시 생각하다가 말했다. "빵 한 조각이었나. 아니면 어젯저녁이었나."',
          '사그라다 파밀리아는 1882년 착공됐다. 가우디가 프로젝트를 이어받은 것은 이듬해였다. 그는 43년을 이 성당에 바쳤다. 사망할 때도 완성되지 않았다. 지금도 짓고 있다.',
          '바르셀로나 시민들이 장례식에 거리로 쏟아져 나왔다. 수만 명이 행렬을 이뤘다. 그는 자신이 짓던 성당의 지하 경당에 묻혔다.',
          '가우디가 남긴 설계 도면 대부분은 1936년 스페인 내전 때 불탔다. 지금의 건축가들은 남은 조각들과 모형을 바탕으로 그의 뜻을 복원하고 있다. 완공 예정은 그의 사망 100주기인 2026년이다.',
          '세계에서 가장 기묘하고 아름다운 건물을 짓던 사람이, 거지로 오해받아 택시도 못 탄 채 빈민 병원에서 죽었다.'
        ],
        closing: '세계에서 가장 아름다운 건물을 짓던 사람이\n거지로 오해받아 택시도 못 탔다.\n그는 빈민 병원에서 죽겠다고 했다.\n가난한 사람들 곁에서.',
        analysis: {
          insight: { icon: '💡', text: '창조자와 피조물이 같은 자리에 있을 때 — 성당을 짓고 성당에서 죽은 사람.', condition: '주체와 객체가 뒤바뀌는 순간' },
          humor:   { icon: '😄', text: '세계적인 건축가가 거지로 오인돼 택시를 못 탔다.', condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '"나는 가난한 사람들 곁에서 죽겠소" — 더 나은 병원을 거부했다.', condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: { type: '실화', credit: '안토니 가우디(Antoni Gaudí, 1852–1926) / Gijs van Hensbergen 《Gaudí: The Biography》(2001, HarperCollins)를 바탕으로 재서술했습니다.' },
        curatorNote: '"나는 가난한 사람들 곁에서 죽겠소." 더 좋은 병원을 거부하고 한 말입니다. 거지로 오해받아 죽음을 맞이하게 된 건축가가 스스로 그 병원을 선택했습니다. 가우디가 만든 것과 가우디가 선택한 것이 같은 방향을 향하고 있었습니다.',
        qna: { question: '자신이 만들어온 것과 자신이 살아온 방식이 같은 방향을 향하고 있다고 느낀 적이 있나요?', answer: '가우디는 아름다움을 위해 살았지만 자신의 마지막은 아름답지 않았습니다. 그러나 그가 선택한 마지막은 그가 평생 지어온 것과 같은 방향이었습니다. 가난한 사람들을 위해, 가난한 사람들 곁에서.' },
        publishedDate: '2026년 4월 8일',
      },
      4: {
        title: '앨런 튜링의 사과',
        category: '역사·통찰',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1940년, 영국 블레츨리 파크. 앨런 튜링은 독일군의 에니그마 암호 해독 팀을 이끌고 있었다. 매일 바뀌는 암호. 경우의 수는 천문학적이었다.',
          '튜링은 전기기계식 해독 장치 "봄베(Bombe)"를 설계했다. 봄베는 수백만 가지 가능성을 빠르게 걸러냈다. 독일 잠수함의 위치가 파악됐다. 수송선이 살아남았다. 전쟁의 흐름이 바뀌었다.',
          '역사가들은 튜링의 작업이 2차 세계대전을 최소 2년 앞당겨 끝냈다고 평가한다. 구한 목숨을 수백만으로 추산하는 연구도 있다. 그러나 그 작업은 비밀이었다. 30년 이상 기밀로 분류됐다.',
          '전쟁이 끝나고 튜링은 맨체스터 대학으로 돌아갔다. 그는 컴퓨터의 개념을 발전시켰다. "기계가 생각할 수 있는가"라는 질문을 제기했다. 그 답을 검증하는 방법을 "튜링 테스트"라 불렀다.',
          '1952년, 그는 동성애 혐의로 기소됐다. 당시 영국에서는 불법이었다. 그는 사실을 부인하지 않았다. 재판에서 감옥 대신 화학적 거세 처치를 선택해야 했다. 여성 호르몬 주사를 맞았다.',
          '2년 후인 1954년 6월 7일, 그는 41세에 사망했다. 침대 옆에 반 쪽이 베어 먹힌 사과가 있었다. 사과에서 시안화물이 검출됐다. 검시관은 자살로 결론 냈다. 그의 어머니는 죽을 때까지 사고사였다고 믿었다.',
          '1966년, 미국 컴퓨터학회는 컴퓨터 과학의 노벨상이라 불리는 "튜링상"을 제정했다. 그러나 그것이 영국 정부의 공식 사과는 아니었다.',
          '2009년, 영국 총리 고든 브라운이 처음으로 공식 사과를 발표했다. 2013년, 엘리자베스 2세가 사면을 발표했다. 튜링이 죽은 지 59년이 지나 있었다.',
          '2021년, 영국 50파운드 지폐의 인물이 바뀌었다. 앨런 튜링이었다. 지폐 뒷면에는 봄베 설계도와 함께 그가 쓴 문장이 실렸다. "우리는 짧은 거리밖에 볼 수 없다. 그러나 해야 할 일이 많이 보인다."',
          '전쟁을 이긴 나라가 전쟁을 이긴 사람을 그렇게 대했다. 그리고 반세기가 지나, 그 사람의 얼굴을 지폐에 새겼다.'
        ],
        closing: '"우리는 짧은 거리밖에 볼 수 없다.\n그러나 해야 할 일이 많이 보인다."\n전쟁을 이긴 나라가 전쟁을 이긴 사람을\n그렇게 대했다.',
        analysis: {
          insight: { icon: '💡', text: '기여의 크기와 대우의 크기가 다를 수 있다 — 수백만 명을 구한 사람이 법에 의해 무너졌다.', condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '검시관 기록에 "직업: 수학자"라고만 적혀 있는 죽음.', condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '50파운드 지폐에 새겨진 얼굴 — 사면이 59년 뒤에 왔다.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '앨런 튜링(Alan Turing, 1912–1954) / Andrew Hodges 《Alan Turing: The Enigma》(1983, Simon & Schuster)를 바탕으로 재서술했습니다.' },
        curatorNote: '"우리는 짧은 거리밖에 볼 수 없다. 그러나 해야 할 일이 많이 보인다." 지폐에 새겨진 문장이 그의 삶 전체를 설명하는 것 같습니다. 전쟁을 이겼지만 알아주는 사람이 없었을 때도, 법정에서도, 그는 해야 할 일을 계속했습니다.',
        qna: { question: '당신이 한 일이 제대로 인정받지 못한 적이 있나요? 그 상황에서 어떻게 계속할 수 있었나요?', answer: '튜링의 작업은 30년 이상 비밀이었고, 그에게 돌아온 것은 기소였습니다. 그러나 그는 계속 일했습니다. 인정이 있어야 할 수 있는 것과 인정 없이도 해야 하는 것이 있다면, 후자가 더 중요한 것인지도 모릅니다.' },
        publishedDate: '2026년 4월 9일',
      },
      5: {
        title: '버트런드 러셀의 체포',
        category: '철학·유머',
        primaryType: '유머',
        types: ['유머', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '1961년 9월 17일, 런던. 버트런드 러셀은 경찰에 체포됐다. 혐의는 집회 및 행진에 관한 법률 위반이었다. 그는 89세였다.',
          '러셀은 핵무기 반대 시위대와 함께 런던 방위부 앞에 앉아 있었다. 경찰이 해산을 요구했다. 러셀은 움직이지 않았다.',
          '법정에서 판사가 물었다. "재범하지 않겠다고 서약하면 석방하겠소." 러셀은 말했다. "아니오. 나는 다시 할 것입니다." 1주일 수감됐다. 브릭스턴 교도소였다.',
          '러셀은 논리학, 수학 기초론, 인식론, 윤리학, 정치철학에서 20세기 철학의 가장 중요한 업적들을 남긴 사람이었다. 1950년 노벨문학상을 받았다. 케임브리지에서 수십 년을 가르쳤다.',
          '그런데 89세에 교도소에 갔다. 수감 서류 직업란에는 "철학자"라고 적혔다.',
          '이것이 처음이 아니었다. 러셀은 1918년에도 수감된 적 있었다. 1차 세계대전 반전 운동 때문이었다. 당시 46세였다. 그는 수감 중에 책을 썼다. 《수리철학 입문(Introduction to Mathematical Philosophy)》이었다.',
          '영국 외무부가 그에게 편지를 보낸 적이 있다. "귀하의 활동이 외교적으로 불편합니다." 러셀이 답했다. "나는 불편한 것이 직업입니다."',
          '러셀은 1970년 97세에 죽었다. 마지막 공식 성명은 이스라엘-팔레스타인 분쟁에 관한 것이었다. 발표된 것은 그가 죽은 다음 날이었다.',
          '러셀이 90세 전후에 남긴 말이 있다. "나이가 든다는 것은 불편하다. 그러나 나이가 들지 않는 유일한 방법은 더 불편하다."',
          '20세기 가장 중요한 철학자가 89세에 교도소에 갔다. "다시 할 것입니다"라고 말하면서.'
        ],
        closing: '"다시 할 것입니다."\n89세 철학자가 교도소에서 한 말.\n그는 97세까지\n불편한 것이 직업이었다.',
        analysis: {
          insight: { icon: '💡', text: '지식인의 의무는 사후에 결산되지 않는다 — 89세에 체포된 철학자가 보여주는 것.', condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
          humor:   { icon: '😄', text: '노벨상 수상자의 교도소 수감 서류 직업란: "철학자".', condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '"나이가 든다는 것은 불편하다. 그러나 나이가 들지 않는 방법은 더 불편하다."', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '버트런드 러셀(Bertrand Russell, 1872–1970) / Ray Monk 《Bertrand Russell: The Ghost of Madness》(2000, Free Press)를 바탕으로 재서술했습니다.' },
        curatorNote: '"나는 불편한 것이 직업입니다." 이 문장이 오래 남습니다. 90세에 가까운 사람이 교도소에서 "다시 할 것"이라고 말한 것. 철학을 쓰는 것으로 끝내지 않고, 몸으로 살아낸 것이 인상적입니다.',
        qna: { question: '나이가 들수록 더 조용해지고 싶은 마음과, 더 크게 말하고 싶은 마음이 동시에 있지 않나요?', answer: '러셀은 나이가 들수록 더 직접 행동했습니다. 46세에 처음 수감됐고, 89세에 다시 수감됐습니다. 그에게 나이는 조용해지는 이유가 아니었습니다. 오래 살수록 더 많은 것이 걸려 있다고 느꼈던 것 같습니다.' },
        publishedDate: '2026년 4월 10일',
      },
      6: {
        title: 'Jolie Laide를 찾아서',
        category: '에세이·일상',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: 'images/jolie laide.webp',
        svgKey: null,
        body: [
          '서로 모순되는 두 단어가 만나 또 다른 멋진 말이 되기도 하는데, 프랑스어 ‘Jolie Laide’가 그렇다. 이 말을 직역하면 ‘아름다운 못난이’로 말이 안 되는 것 같지만, 자신만의 개성으로 더 아름답게 보이는 사람을 가리키는 말이다.',
          '이 단어와 같은 방식으로 ‘Jolie Laide’들만이 갖는 특징을 들여다보자.',
          '‘Jolie Laide’들의 매력은 다른 세계에 사는 듯한 이질감으로 멀게만 느껴지는 아이돌스타와 다르다. 언뜻 보면 평범하기 그지없지만 자세히 보면 아주 매력적이다. 가장 좋은 것을 먼저 보여준 다음에 실망을 안겨주는 게 아니라 알아갈수록 점점 더 빛나는 모습을 선사한다. 한마디로 이들의 매력은 ‘친밀한 거리감’이다.',
          '또 이들은 못난이 취급받던 시절을 딛고 지금의 성공을 일구었기 때문에 내면이 수줍어하는 듯하면서도 자신감이 넘쳐난다. 스스로 삶을 꾸려갈 수 있을 만큼 자존감이 높고, 때로는 다른 사람들을 앞세우는 수줍음도 있다. 이들의 내면을 ‘당당한 수줍음’으로 불러도 좋겠다.',
          '그리고 ‘Jolie Laide’들은 자신의 약점과 한계를 극복하는 과정을 거쳤기 때문에 모순과 갈등 속에서만 발견되는 삶의 진실에 가까이 있다. 나침반의 바늘이 떨리면서도 항상 북쪽을 가리키듯, 이들의 삶은 흔들릴 때도 있지만 어느새 진실을 가리키고 있는 ‘고정된 흔들림’이다.',
          '끝으로 이들은 자신의 부족함을 강점으로 바꿀 수 있는 독창성을 갖고 있다. 줄이 그어진 종이가 주어져도 대각선으로 글을 쓸 수 있고, 틀 속에 가두려고 하면 어느새 빠져나가 버린다. 주어진 한계를 자유롭게 넘나들고, 더 멋진 뭔가를 향해 뛰어들고 넘어지고 다시 일어선다. 세상이 볼 때 이들은 언제 뚫릴지 모르는 ‘도발적 경계선’과 같다.',
          '‘Jolie Laide’들만이 갖는 나름의 매력, 성숙한 내면, 고집스러운 진실됨 그리고 남다른 독창성은 내 안에 그리고 우리 가운데 ‘Jolie Laide’를 찾아 나서라고 초청한다. 최고의 외모와 스펙으로 똑같은 성공을 찾아 질주하는 현 시대가 진정 필요로 하는 것은 또 한 명의 스타가 아니다. 나와 다르지 않고 우리도 얼마든지 될 수 있는 ‘Jolie Laide’인 것이다.',
          '나만 두드러지게 하는 외모나 돈이 아니라 내면과 인성 같은 보이지 않으나 분명한 것들에 다시 눈을 돌려야 한다. 나만 잘 되면 그만인 출세나 명예가 아니라 사랑과 공동체처럼 누린 적 있지만 기억할 수 없는 것들을 거듭 붙잡아야 한다.',
          '이럴 때 나와 우리는 ‘오래된 미래’처럼 ‘Jolie Laide’로 가득 찬 세상을 만나게 될 것이다. 그렇다면 ‘Jolie Laide’ 세상은 ‘이미와 아직 사이’에 있다.'
        ],
        closing: '‘아름다운 못난이.’\n알아갈수록 점점 더 빛나는 사람.\n‘Jolie Laide’ 세상은\n‘이미와 아직 사이’에 있다.',
        analysis: {
          insight: { icon: '💡', text: '약점이 개성이 되는 순간 — 부족함을 강점으로 바꾼 사람이 가장 오래 빛난다.', condition: '주체와 객체가 뒤바뀌는 순간' },
          humor:   { icon: '😄', text: '‘아름다운 못난이’ — 말이 안 되는 것 같지만 가장 정확한 표현이다.', condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '알아갈수록 점점 더 빛나는 사람 — 처음에는 평범해 보였지만 가까워질수록 아름다운.', condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: { type: '에세이', credit: 'SCJ / blog.naver.com/scjoe' },
        curatorNote: '‘고정된 흔들림.’ 이 표현이 오래 남습니다. 나침반 바늘처럼 떨리면서도 북쪽을 가리키는 사람. 흔들리는 것이 약점이 아니라, 흔들리면서도 방향을 잃지 않는 것이 그 사람의 본질이라는 것.',
        qna: { question: '당신 주변의 Jolie Laide는 누구입니까? 처음에는 평범해 보였지만, 알아갈수록 빛났던 사람.', answer: 'Jolie Laide는 완벽한 스펙이 아니라 자신만의 결을 가진 사람입니다. 못난이 시절을 딛고 왔기 때문에 내면이 더 깊습니다. 줄 그어진 종이에 대각선으로 글을 쓰는 사람 — 그런 사람이 우리 안에 있습니다.' },
        publishedDate: '2026년 4월 11일',
      },
    },
  },
  {
    weekLabel: '2026년 4월 1주 (3/30–4/4)',
    weekStart: '2026-03-30',
    stories: {
      1: {
        title: '넬슨 만델라의 정원',
        category: '역사·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '만델라는 1964년 종신형을 선고받았다. 로벤섬 교도소. 남아프리카공화국의 아파르트헤이트 체제가 그를 가둔 곳이었다.',
          '섬의 생활은 가혹했다. 수감자들은 매일 석회석 채굴장으로 끌려갔다. 눈부신 흰 석회 가루가 눈을 손상시켰다. 만델라는 나중에 그 시절 때문에 눈이 약해졌다고 회고했다. 감방은 좁았다. 담요 두 장뿐이었다.',
          '그는 교도소 마당에 텃밭을 만들어도 되겠느냐고 요청했다. 처음에는 거부당했다. 몇 년 뒤, 허락이 떨어졌다. 마당의 작은 구석이었다.',
          '만델라는 토마토, 양파, 시금치, 딸기를 심었다. 매일 물을 주고, 잡초를 뽑고, 수확했다. 수확한 채소는 동료 수감자들과 나눴다. 심지어 교도관들에게도 나눠줬다.',
          '텃밭은 점점 넓어졌다. 결국 900개가 넘는 식물을 키우게 됐다. 채소를 받은 교도관들 중 일부는 그를 대하는 방식이 조금씩 달라졌다. 철조망을 사이에 두고 건네는 그 순간, 그것은 이미 채소 이상이었다.',
          '"씨앗이 자라는 것을 보는 것이 내가 살아 있다는 증거였다. 땅에 무언가를 심고 거두는 행위가 내 자유였다."',
          '만델라는 어린 시절 트란스케이의 농촌에서 자랐다. 템부 왕가의 후손으로 태어났지만 땅과 씨앗에 익숙한 환경이었다. 수십 년을 감방에 가두어도 그 기억까지 빼앗아갈 수는 없었다.',
          '27년이 지났다. 1990년, 그는 걸어나왔다. 1994년, 남아프리카공화국 최초의 흑인 대통령이 됐다.',
          '대통령 취임 연설에서 그는 말했다. "우리를 가두는 것은 증오가 아니라 두려움입니다."',
          '텃밭에서 그는 기다리는 법을 배웠다. 씨앗도, 역사도, 시간이 필요하다는 것을. 그리고 심는 행위 자체가, 결과를 믿는다는 선언이었다.'
        ],
        closing: '"씨앗이 자라는 것을 보는 것이\n내가 살아 있다는 증거였다."\n텃밭에서 그는 기다리는 법을 배웠다.',
        analysis: {
          insight: { icon: '💡', text: '자유는 조건이 아니라 행위다 — 심고 거두는 것이 가능한 한, 그는 갇히지 않았다.', condition: '주체와 객체가 뒤바뀌는 순간' },
          humor:   { icon: '😄', text: '채소를 교도관에게도 나눠줬다 — 수감자가 교도관에게 선물을 준 텃밭.', condition: '기대와 전혀 다른 방식으로 일이 풀릴 때' },
          emotion: { icon: '❤️', text: '27년을 기다렸다 — 텃밭을 가꾼 것은 희망을 포기하지 않은 것이었다.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '넬슨 만델라(Nelson Mandela, 1918–2013) / 《자유를 향한 긴 여정》(Long Walk to Freedom, 1994, Little, Brown and Company)을 바탕으로 재서술했습니다.' },
        curatorNote: '교도관에게도 채소를 나눠줬다는 것이 오래 남습니다. 27년을 가둔 체제의 일부인 사람에게. 그것이 그를 지키는 방법이었을 것입니다.',
        qna: { question: '가장 좁은 공간에서 가장 크게 자란 것이 있나요? 제약이 오히려 뿌리를 내리게 해준 경험.', answer: '만델라의 텃밭은 저항의 상징이 아니었습니다. 그것은 그냥 텃밭이었습니다. 그러나 씨앗을 심고 기다리는 행위가 그를 지켰습니다. 자유는 때로 거창한 선언이 아니라, 매일 물을 주는 것입니다.' },
        publishedDate: '2026년 3월 30일',
      },
      2: {
        title: '니체의 포옹',
        category: '철학·역사',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: 'images/니체의 포옹.webp',
        svgKey: null,
        body: [
          '1889년 1월 3일, 이탈리아 토리노. 프리드리히 니체는 호텔 방에서 나와 광장으로 걸어 나왔다.',
          '그 무렵 토리노는 니체에게 행복한 도시였다. 전해 여름부터 머물며 자신이 쓴 것들이 드디어 유럽에서 주목받기 시작했다. 편지에서 그는 "내 건강이 완벽하다", "나는 믿을 수 없을 만큼 좋은 상태"라고 썼다. 그러나 같은 시기 편지들에는 이미 과대한 서명이 끼어들기 시작했다.',
          '광장 한쪽에서 마부가 말을 채찍질하고 있었다. 말은 움직이지 않았다. 마부는 계속 때렸다.',
          '니체는 달려갔다. 말의 목을 두 팔로 껴안았다. 그리고 그 자리에서 쓰러졌다.',
          '하숙집 주인이 달려와 그를 방으로 데려갔다. 이틀 동안 그는 침대에서 일어나지 못했다. 간간이 의식이 돌아오면 피아노 앞에 앉아 소리를 질렀다. 오랜 친구 야코프 부르크하르트에게 보낸 편지에는 이렇게 씌어 있었다. "나는 사실 황제보다 낫습니다."',
          '그가 쓰러지기 전 마지막으로 남긴 편지들에는 과대한 서명이 적혀 있었다. "디오니소스", "십자가에 못 박힌 자." 무언가가 이미 무너지고 있었다.',
          '친구 오버벡이 토리노로 달려왔다. 그를 바젤로 데려갔다. 이후 예나의 정신병원에 입원했다. 어머니가 데려와 집에서 돌봤고, 어머니가 세상을 떠난 뒤에는 여동생 엘리자베트가 그를 바이마르로 옮겼다. 이후 11년을 거의 아무것도 쓰지 않았다. 1900년에 죽었다.',
          '니체는 힘에의 의지를 썼다. 초인을 말했다. 신의 죽음을 선언했다. 그러나 채찍 맞는 말 앞에서 그는 달려갔다.',
          '후날 학자들은 그 순간의 원인을 두고 논쟁했다. 매독, 뇌종양, 유전적 요인. 그러나 어떤 진단도 그 광장의 장면을 설명하지 못했다. 왜 그는 달려갔는가. 왜 그것이 마지막 행위였는가.',
          '철학이 말해준 것은 하나였다. 그러나 몸이 한 것은 달랐다.'
        ],
        closing: '힘에의 의지를 썼던 사람이\n채찍 맞는 말을 껴안고 쓰러졌다.\n철학이 말해준 것과\n몸이 한 것은 달랐다.',
        analysis: {
          insight: { icon: '💡', text: '사람은 자신의 철학대로 살지 않는다 — 초인을 논한 사람이 약한 것 앞에서 무너졌다.', condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '"디오니소스"라고 서명한 편지들 — 세상에서 가장 냉철한 철학자의 마지막 서명.', condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '말의 목을 껴안고 쓰러졌다 — 그 포옹이 그의 마지막 완전한 행위였다.', condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: { type: '실화', credit: '프리드리히 니체(Friedrich Nietzsche, 1844–1900) / Julian Young 《Friedrich Nietzsche: A Philosophical Biography》(2010, Cambridge University Press)를 바탕으로 재서술했습니다.' },
        curatorNote: '힘에의 의지를 쓴 사람이 채찍 맞는 말을 껴안았다는 것. 그 장면이 오래 남습니다. 우리가 가장 강하게 주장한 것이 사실 우리가 가장 두려워한 것이었는지 모릅니다.',
        qna: { question: '당신이 이성적으로 맞다고 알면서도, 몸이 다른 방향으로 간 적이 있나요?', answer: '니체의 철학은 일관됐습니다. 그러나 그 순간 그의 몸은 달랐습니다. 우리가 쓰는 것과 우리가 사는 것 사이의 거리. 그 거리가 때로 가장 솔직한 자화상입니다.' },
        publishedDate: '2026년 3월 31일',
      },
      3: {
        title: '처칠의 낮잠',
        category: '역사·유머',
        primaryType: '유머',
        types: ['유머', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '윈스턴 처칠은 매일 낮잠을 잤다.',
          '습관은 1895년 쿠바에서 시작됐다고 전해진다. 스물한 살의 육군 장교 시절, 그는 스페인 식민 정부와 반군 사이의 전쟁을 취재하러 갔다. 그곳에서 낮의 더위를 피해 쉬는 시에스타 문화를 경험했다. 이후 그것은 평생의 습관이 됐다.',
          '전시 수상이었을 때도 마찬가지였다. 점심 후 침실로 들어가, 옷을 모두 갈아입고, 제대로 잤다. 1~2시간. 참모들이 급한 보고를 위해 들어오려 해도 거절했다. 잠든 처칠의 침실 문 앞에서 대기하는 것이 전시 내각의 일상이었다.',
          '그는 낮잠을 자고 일어나 다시 한 번 완전한 하루를 시작했다. 자정을 넘겨 새벽 서너 시까지 일했다. 문서를 검토하고, 전보를 보내고, 연설을 썼다. 그가 가장 왕성하게 일한 시간은 낮잠 이후였다.',
          '"낮잠은 약점이 아닙니다. 나는 낮잠 덕분에 하루에 두 번 일합니다."',
          '그리고 덧붙였다. "히틀러는 낮잠을 자지 않습니다. 그래서 실수를 합니다."',
          '어느 날 하원에서 처칠이 눈을 감고 있었다. 한 의원이 긴 연설 중에 힐끗 보더니 말했다. "수상, 주무시는 겁니까?"',
          '처칠은 눈을 뜨지 않은 채 대답했다. "그랬으면 얼마나 좋겠소."',
          '그는 그날도 낮잠을 잔 뒤 돌아와서 연설을 했다. 그 연설은 지금도 인용된다.',
          '처칠은 91세까지 살았다. 주치의 모런 경은 그의 장수 비결을 묻는 질문에 잠시 생각하다가 답했다. "절대 서두르지 않았습니다. 그리고 절대 낮잠을 거르지 않았습니다."'
        ],
        closing: '"히틀러는 낮잠을 자지 않습니다.\n그래서 실수를 합니다."\n눈을 감은 채로 이긴 전쟁이 있다.',
        analysis: {
          insight: { icon: '💡', text: '회복이 전략이다 — 쉬는 것이 더 오래, 더 잘 싸우는 방법이었다.', condition: '반대로 해야 더 잘 되는 것' },
          humor:   { icon: '😄', text: '"그랬으면 얼마나 좋겠소" — 자고 있었느냐는 질문에 자고 싶었다는 대답.', condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '2차 세계대전 중에도 낮잠을 포기하지 않았다 — 자신을 지키는 방법을 알았다.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '윈스턴 처칠(Winston Churchill, 1874–1965) / Roy Jenkins 《Churchill: A Biography》(2001, Farrar Straus & Giroux)를 바탕으로 재서술했습니다.' },
        curatorNote: '"히틀러는 낮잠을 자지 않아서 실수한다"는 말이 오래 남습니다. 농담처럼 들리지만 진지한 말입니다. 충분히 쉬는 것이 더 잘 싸우는 방법이라는 것을 그는 알고 있었습니다.',
        qna: { question: '당신에게 꼭 지키는 회복의 방식이 있나요? 아무리 바빠도 포기하지 않는 습관.', answer: '처칠은 낮잠이 사치가 아니라 전략이라고 믿었습니다. 가장 바쁜 시간에 쉬는 것이 더 오래 갈 수 있게 해줍니다. 회복하지 않는 것은 더 빠른 길이 아니라 더 짧은 길입니다.' },
        publishedDate: '2026년 4월 1일',
      },
      4: {
        title: '다윈의 지렁이',
        category: '과학·통찰',
        primaryType: '통찰',
        types: ['통찰', '유머'],
        image: null,
        svgKey: null,
        body: [
          '찰스 다윈의 마지막 책 주제는 지렁이였다.',
          '《지렁이의 작용으로 형성된 식물성 부식토》. 1881년 출판됐다. 다윈이 죽기 1년 전이었다. 진화론을 발표하고 22년이 지난 뒤였다.',
          '그는 40년 동안 지렁이를 연구했다. 서재에 지렁이를 두었다. 빛에 반응하는지 알기 위해 램프를 비췄다. 소리에 반응하는지 알기 위해 바순을 불었다. 아들에게 피아노를 치게 했다. 담배 연기도 내뿜어봤다. 지렁이는 아무 반응이 없었다.',
          '그러나 땅에서는 달랐다.',
          '다윈은 영국 스톤헨지를 직접 방문했다. 수천 년 된 거대한 돌들이 얼마나 깊이 땅속으로 가라앉았는지 측정했다. 원인은 지렁이였다. 돌 아래의 흙을 지렁이들이 파내면서 돌이 서서히 묻혀 들어간 것이었다. 로마 시대의 도로와 건물 잔해가 땅속에서 보존된 것도 같은 이치였다.',
          '다윈의 결론은 이것이었다. 지렁이들이 수천 년에 걸쳐 지구 표층 전체를 뒤집어 놓았다. 고대 건물의 잔해가 땅 아래로 가라앉는 것은 지렁이가 그 아래 흙을 파냈기 때문이다. 문명의 유물이 보존된 것도 지렁이 덕분이었다.',
          '"지구상에서 지렁이만큼 세계 역사에서 중요한 역할을 한 동물은 거의 없을 것입니다."',
          '이 책은 출판 첫 해에 6,000부 이상 팔렸다. 《종의 기원》 초판이 1,200부 팔린 것과 비교하면 놀라운 숫자였다. 빅토리아 시대 독자들도 다윈의 지렁이에 매혹됐다.',
          '그는 다운하우스 정원에서 평생 실험을 계속했다. 아들 프랜시스와 함께 데이터를 기록하고, 측정하고, 계산했다. 지렁이는 그에게 마지막 논문이 아니라, 40년을 이어온 조용한 관심의 결실이었다.',
          '《종의 기원》을 쓴 사람이 마지막으로 남긴 말이었다.'
        ],
        closing: '"지렁이만큼 세계 역사에서\n중요한 역할을 한 동물은 거의 없을 것입니다."\n《종의 기원》을 쓴 사람의 마지막 말이었다.',
        analysis: {
          insight: { icon: '💡', text: '위대한 것은 보이지 않는 곳에서 쌓인다 — 지렁이가 문명을 보존했다.', condition: '작은 것이 사실 전부였던 이야기' },
          humor:   { icon: '😄', text: '지렁이에게 바순을 불었다 — 지구에서 가장 유명한 과학자가 지렁이와 보낸 40년.', condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
          emotion: { icon: '❤️', text: '죽기 1년 전까지 지렁이를 연구했다 — 마지막까지 가장 작은 것에 집중했다.', condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: { type: '실화', credit: '찰스 다윈(Charles Darwin, 1809–1882) / 《지렁이의 작용으로 형성된 식물성 부식토》(1881), Janet Browne 《Charles Darwin: The Power of Place》(2002, Alfred A. Knopf)를 바탕으로 재서술했습니다.' },
        curatorNote: '《종의 기원》 이후 마지막 책이 지렁이였다는 것. 진화론의 거대한 틀을 완성한 뒤, 마지막으로 집중한 것이 땅속 가장 작은 동물이었습니다. 다윈에게는 큰 것과 작은 것 사이에 서열이 없었던 것 같습니다.',
        qna: { question: '가장 보잘것없어 보이는 것이 사실은 가장 중요했다는 것을 알게 된 적이 있나요?', answer: '다윈은 지렁이가 보잘것없다고 생각하지 않았습니다. 40년을 연구한 결과, 지렁이가 문명을 보존했다는 것을 밝혔습니다. 우리가 무시하는 것들이 사실 가장 묵묵히 세상을 유지하고 있는 것들일 수 있습니다.' },
        publishedDate: '2026년 4월 2일',
      },
      5: {
        title: '베케트의 친절',
        category: '문학·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '사뮈엘 베케트는 파리에서 혼자 살았다. 《고도를 기다리며》를 쓴 사람이었다. 그는 글을 마치면 카페에 가거나 혼자 걸었다.',
          '전쟁 중에도 그는 파리를 떠나지 않았다. 나치 점령기에 레지스탕스에 가담했다. 지하 조직이 발각되자 남쪽으로 피신했다. 전쟁이 끝나고 돌아왔다. 그리고 남은 평생을 파리에서 보냈다.',
          '어느 날 이웃 여성이 부탁을 해왔다. 아들을 학교에 데려다줄 수 있겠느냐고. 그녀가 새벽 일찍 출근해야 했기 때문이었다.',
          '베케트는 매일 아침 소년을 학교에 데려다줬다. 수 년 동안.',
          '두 사람은 별로 말이 없었다. 베케트는 말이 많은 편이 아니었다. 소년도 아침에 말이 많지 않았다.',
          '어머니가 거듭 감사를 표했다. 베케트는 어깨를 으쓱했다. "길이 같아서요."',
          '길이 같지는 않았다.',
          '베케트는 1969년 노벨 문학상을 받았다. 수상식에는 가지 않았다. 그는 스톡홀름이 아니라 튀니지에서 낚시를 하고 있었다. 세상의 주목을 그는 조용히 피했다. 그러나 편지는 달랐다. 세계 각지의 독자들에게서 온 수백 통의 편지에 직접 손으로 답장을 썼다. 무명의 작가가 격려를 구해도, 아픈 사람이 그의 글에 대해 써 보내도. 그는 대부분에게 답했다.',
          '소년은 나중에 회고했다. "그분은 아무것도 기대하지 않았습니다. 그냥 왔습니다."',
          '《고도를 기다리며》에서 두 인물은 아무것도 오지 않는 것을 기다린다. 그러나 매일 아침, 베케트는 실제로 어딘가에 도착했다.'
        ],
        closing: '"그냥 왔습니다."\n아무것도 오지 않는 것을 기다리는 이야기를 쓴 사람이\n매일 아침 약속 장소에 나타났다.',
        analysis: {
          insight: { icon: '💡', text: '철학과 삶이 다를 때, 삶이 더 진실하다 — 절망을 쓴 작가가 매일 아침 나타났다.', condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '"길이 같아서요" — 길이 같지 않았다. 베케트의 친절은 설명을 거부했다.', condition: '기대와 전혀 다른 방식으로 일이 풀릴 때' },
          emotion: { icon: '❤️', text: '"그냥 왔습니다" — 아무것도 기대하지 않고, 매일 왔다.', condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: { type: '실화', credit: '사뮈엘 베케트(Samuel Beckett, 1906–1989) / James Knowlson 《Damned to Fame: The Life of Samuel Beckett》(1996, Simon & Schuster)를 바탕으로 재서술했습니다.' },
        curatorNote: '"그냥 왔습니다"라는 말이 오래 남습니다. 《고도를 기다리며》에서는 아무도 오지 않지만, 실제로 베케트는 매일 왔습니다. 작품과 삶이 이렇게 다를 때, 어느 쪽이 그 사람인지 생각하게 됩니다.',
        qna: { question: '당신이 아무 말 없이 꾸준히 해온 것이 있나요? 이유를 설명하지 않고 그냥 해온 것.', answer: '베케트는 이유를 설명하지 않았습니다. "길이 같아서요"라고만 했습니다. 가장 순수한 친절은 설명을 필요로 하지 않습니다. 그냥 온 것, 그냥 있어준 것. 그것이 전부일 때가 있습니다.' },
        publishedDate: '2026년 4월 3일',
      },
      6: {
        title: '0번',
        category: '에세이·일상',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: 'images/0번.webp',
        svgKey: null,
        body: [
          '‘선하다는 게 도대체 무엇입니까?’라는 질문에 맹자는 ‘선하다는 것은 가까이하고 싶다는 뜻이다’라고 답했다. 정말 와닿는 말이 아닐 수 없다. 가까이하고 싶은 사람이 있고, 멀리 떨어져 있고 싶은 사람도 있다.',
          '막내한테도 그렇다. 막내에게 1번은 엄마, 2번은 아빠, 3번은 둘째 형, 4번은 큰 형이다. 가끔 막내가 엄마나 둘째 형과 다투기라도 한 날에는 2번이 1번이 되고 4번이 3번이 되기도 한다.',
          '도무지 넘볼 수 없는 순위도 있는데, 0번 할머니다. 엄마 아빠가 잘해줘서 엄청 기분 좋은 날에 혹시 순위가 변했는지 물어봐도 0번은 꼼짝도 안 한다. 가까운 거리로 따지자면, 1번은 1m 2번은 2m인데 0번은 아예 딱 달라붙은 거다.',
          '잠잘 때 그렇게 아빠와 붙어 있으려 하고 레슬링 할 때도 몸을 아끼지 않고 뒹굴어 줬건만, 나는 마냥 2번에 머물러 있다.',
          '돌아보니 나도 그랬다.',
          '딸 셋 다음 태어난 아들이라는 이유로 할머니는 나를 마음에 쏙 들어 했다. 언제나 곁에 있었던 할머니 덕에, 나는 가족 중에서 제일 먼저 밥상을 받았고 가장 따뜻한 방에서 잤다. 동네에서도 제일 어른이었던 할머니는 나를 괴롭히는 형들이나 친구들을 아주 매섭게 혼내곤 했다. 기세등등해진 나는 할머니를 괴롭히기도 했는데, 허리가 약해져서 앉을 때도 아주 느리게 몸을 일으켰던 할머니를 장난삼아 자꾸 밀치곤 했다. 둘 사이에 수많은 말다툼도 있었겠지만, 언제나 내가 승자였던지 전혀 기억이 나질 않는다.',
          '이렇게 손주는 할머니를 통해 한없는 사랑과 아낌없는 보살핌을 누리고, 할머니는 손주를 통해 온갖 어려움을 뚫고 기필고 얻어낸 삶의 열매를 맛본다. 할머니와 손주는 산 날은 큰 차이가 있지만, 힘이 없다는 점에서는 같고 상대만 있다면 세상 무서울 게 없고 그 누구도 부럽지 않다는 점에서 동일하다. 이래서 어린 시절만큼은 할머니와 손주는 서로서로 가장 소중한 관계인 0번이 될 수밖에 없다.',
          '할머니에게 버릇없이 굴던 내 나이 때와 같은 시기의 우리집 막내도 0번과 말다툼이 있었다. 막내가 ‘왜 내 마음을 지워!!!’라는 독특한 말을 하면서 울부짖었다. 뭔가 억울한 일이 생겼는데, 0번이 그 마음을 몰라주고 서둘러 마무리를 하려고 하니, 막내는 마음을 지운다고 느꼈던 것이다.',
          '그러나 서운한 마음을 표현도 않고 먼저 지우는 쪽은 늘 할머니다.',
          '내 할머니는 일제 강점기와 625 전쟁을 겪었고 먼저 떠난 할아버지를 대신해 자식들을 먹여 살리기 위해 밀주를 팔기도 했다. 캄캄한 새벽에 무거운 술독을 등에 지고 1,000m가 넘는 황악산을 넘나들었다. 이런 천신만고를 견뎌낸 아프고 사연 많은 허리를 어린 손주는 알 리가 없었다.',
          '그래서 0번의 또 다른 의미는 이렇다. 아무리 섭섭한 일이 있어도 할머니는 손주의 잘못을 기억하지 않는다. 엄청나게 큰 수라도 0을 곱하면 그 값이 0이 되듯 할머니는 손주의 모든 허물을 생기기도 전에 잊는다. 가장 소중한 손주에게 가장 좋은 추억만 남기고 싶기 때문이다.',
          '그렇게 보면 0은 없는 게 아니다. 계속 기억되고 이어질 뿐…….'
        ],
        closing: '1번은 1m, 2번은 2m.\n0번은 아예 딱 달라붙은 거다.\n그리고 0은 없는 게 아니다.\n계속 기억되고 이어질 뿐…….',
        analysis: {
          insight: { icon: '💡', text: '선함은 가까이하고 싶은 것 — 0번은 순위 밖의 순위, 측정할 수 없는 가까움이다.', condition: '작은 것이 사실 전부였던 이야기' },
          humor:   { icon: '😄', text: '엄마 아빠가 아무리 잘해줘도 0번은 꼼짝 안 한다 — 도무지 넘볼 수 없는 순위.', condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '서운한 마음을 먼저 지우는 쪽은 늘 할머니다 — 0번의 진짜 의미.', condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: { type: '에세이', credit: 'SCJ / blog.naver.com/scjoe' },
        curatorNote: '"0번은 아예 딱 달라붙은 거다." 이 문장이 오래 남습니다. 그리고 맹자의 말 — 선하다는 것은 가까이하고 싶다는 뜻이라는 것. 할머니는 숫자 이전의 자리에 있었습니다.',
        qna: { question: '당신의 0번은 누구입니까? 아무리 싸워도, 아무리 시간이 지나도 꼼짝 않는 그 자리.', answer: '0을 곱하면 무엇이든 0이 됩니다. 할머니는 손주의 허물에 0을 곱합니다. 그래서 0번은 비어 있는 자리가 아닙니다. 가장 꽉 찬 자리입니다.' },
        publishedDate: '2026년 4월 4일'
      }
    }
  },
  {
    weekLabel: '2026년 3월 1주 (3/2–3/6)',
    weekStart: '2026-03-02',
    stories: {
      1: {
        title: '이그나즈 제멜바이스의 손',
        category: '의학·역사',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: 'images/story-semmelweis.webp',
        svgKey: 6,
        body: [
          '1847년 봄, 빈 종합병원. 이그나즈 제멜바이스는 숫자를 들여다보고 있었다. 같은 건물 안의 두 산부인과 병동이었다. 1병동의 산모 사망률은 10~35%였다. 2병동은 4%였다.',
          '이유를 아무도 몰랐다. 산모들은 1병동에 배정된다는 말을 들으면 울며 간청했다. "제발 2병동에 넣어주세요." 의사들은 고개를 저었다. 원인을 몰랐다.',
          '차이는 딱 하나였다. 1병동은 의대생과 의사들이 담당했다. 그들은 아침마다 시체 해부를 하고, 손을 씻지 않은 채로 곧바로 산모를 진찰했다. 2병동은 해부를 하지 않는 조산사들이 담당했다.',
          '어느 날 제멜바이스의 동료 야코프 콜레츠카가 해부 실습 중 학생의 메스에 손을 베였다. 며칠 뒤 그는 사망했다. 증상이 산모들이 죽어가던 것과 똑같았다.',
          '제멜바이스는 깨달았다. 의사의 손이 시체에서 무언가를 옮기고 있다. 그는 병동에 염화석회 용액으로 손 씻기를 의무화했다. 사망률은 즉시 1~2%로 떨어졌다.',
          '그러나 아무도 믿지 않았다.',
          '동료 의사들은 분노했다. 의사가 환자를 죽이고 있다는 뜻이냐고. 제멜바이스는 세균의 존재를 설명할 수 없었다. 파스퇴르의 세균론은 아직 세상에 없었다. 그는 효과는 보였지만, 이유를 설명할 언어가 없었다.',
          '그는 점점 절박해졌다. 동료들에게 편지를 보냈다. "당신들이 산모를 죽이고 있습니다." 학회에서 소리쳤다. 사람들은 그를 미쳤다고 했다.',
          '1865년, 그는 정신병원에 강제로 보내졌다. 그리고 14일 만에 사망했다. 아이러니하게도, 그가 평생 막으려 했던 그 감염으로.',
          '그가 죽고 나서야 파스퇴르가 세균론을 완성했다. 리스터가 무균 수술을 도입했다. 세상은 손을 씻기 시작했다. 제멜바이스의 발견이 옳았다는 것이 증명됐다.',
          '그의 이름은 이제 의학 역사에 남아 있다. "제멜바이스 반사"라는 말도 생겼다. 새로운 발견이 기존 믿음을 위협할 때, 사람들이 증거보다 저항을 먼저 택하는 현상을 가리킨다.'
        ],
        closing: '그는 옳았다. 그리고 그 이유로 죽었다.\n진실이 환영받기까지 시간이 걸린다는 것, 그것도 진실의 일부다.',
        analysis: {
          insight: { icon: '💡', text: '새로운 진실은 기존 믿음을 위협할 때 저항에 먼저 부딪힌다 — 제멜바이스 반사.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '손만 씻으면 된다는 말에 19세기 최고의 의사들이 분노했다는 사실.',
                     condition: '너무 단순해서 오히려 받아들이기 어려운 진실' },
          emotion: { icon: '❤️', text: '그는 자신이 옳다는 것을 알면서, 증명할 언어가 없어 홀로 싸우다 세상을 떠났다.',
                     condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: {
          type: '실화',
          credit: '이그나즈 제멜바이스 (Ignaz Semmelweis, 1818–1865) / 빈 종합병원 산부인과, 1847년',
        },
        curatorNote: '제멜바이스가 정신병원에서 숨진 날로부터 딱 14일이었다는 것이 계속 마음에 걸렸습니다. 그리고 그가 죽은 원인이 그가 막으려 했던 그 감염이었다는 것도. 역사에는 가끔 이렇게 잔인하게 아이러니한 장면이 있습니다.',
        qna: {
          question: '지금 내 주변에서 "손을 씻으면 됩니다"처럼 단순하지만 받아들여지지 않는 진실이 있다면 무엇입니까?',
          answer: '제멜바이스의 비극은 그가 틀렸기 때문이 아니었습니다. 진실이 너무 단순했고, 기존 믿음을 너무 직접적으로 건드렸기 때문이었습니다. 우리 주변에도 "그것은 말이 안 된다"고 무시당하는 단순한 진실들이 있을 수 있습니다. 때로 가장 중요한 발견은 가장 먼저 조용히 묻힙니다.'
        },
        publishedDate: '2026년 3월'
      },
      2: {
        title: '도스토예프스키의 4분',
        category: '역사·문학',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1849년 12월 22일, 상트페테르부르크. 영하의 새벽, 세메노프스키 광장.',
          '27세의 표도르 도스토예프스키는 동료들과 함께 총살형 기둥 앞에 섰다. 반정부 서클에 참여했다는 혐의였다. 8개월을 감옥에서 보낸 뒤였다. 이제 끝이었다.',
          '첫 번째 조가 눈가리개를 쓰고 기둥에 묶였다. 도스토예프스키는 두 번째 조였다. 앞에 서 있는 동료들을 바라봤다. 군인들이 총을 들었다.',
          '그 순간 그는 생각했다. 저 교회 지붕 위에서 햇빛이 반짝이고 있다. 아름답다. 5분 후면 나는 없다. 저 빛이 마지막 빛이다.',
          '총성이 울리지 않았다.',
          '황제의 사면 명령이 담긴 봉투가 전령의 손에 들려 광장으로 달려왔다. 처형은 처음부터 연극이었다. 황제 니콜라이 1세는 사형을 선고하고 집행 직전 사면하는 것으로 교훈을 주려 했다. 도스토예프스키는 대신 시베리아 유형 4년을 선고받았다.',
          '그는 형에게 편지를 썼다. "나는 그 4분 동안 살았습니다. 나머지 시간은 어떻게 살아야 하는지 배웠습니다."',
          '시베리아에서 돌아온 뒤, 그는 완전히 다른 작가가 됐다. 《죄와 벌》, 《백치》, 《악령》, 《카라마조프의 형제들》. 그의 모든 소설 속 인물들은 죽음 앞에 서 있다. 자기 자신의 죄와 대면한다. 그 안에서 인간이 무엇인지를 찾는다.',
          '한 문학평론가는 말했다. "도스토예프스키의 소설은 전부 세메노프스키 광장에서 시작됐다."',
          '그는 생의 마지막 날까지 그 4분을 기억했다. 교회 지붕 위의 빛을 기억했다. 그리고 소설 속 인물들에게 그 빛을 줬다. 죽음 바로 앞에서야 보이는 빛을.'
        ],
        closing: '죽음 앞에서 4분을 살고 난 뒤, 그는 인간을 다르게 보기 시작했다.\n우리가 그토록 오래 살면서도 보지 못하는 것들을.',
        analysis: {
          insight: { icon: '💡', text: '한계가 시야를 만든다 — 끝을 본 사람만이 볼 수 있는 것이 있다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '처형이 연극이었다는 것을 알고도, 그 4분이 진짜 삶을 만들었다.',
                     condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
          emotion: { icon: '❤️', text: '"나는 그 4분 동안 살았습니다" — 가장 짧은 시간이 가장 긴 삶을 만들었다.',
                     condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: {
          type: '실화',
          credit: 'Fyodor Dostoevsky (1821–1881) / 세메노프스키 광장, 상트페테르부르크, 1849년 12월 22일',
        },
        curatorNote: '그 4분 동안 교회 지붕 위의 빛을 봤다는 것이 계속 마음에 걸렸습니다. 그리고 그 빛이 이후 그의 소설 전체에 스며있다는 것도. 죽음 바로 앞에서야 보이는 것이 있다면, 우리는 그것을 어떻게 볼 수 있을까요.',
        qna: {
          question: '오늘이 마지막 날이라면, 당신은 무엇을 가장 아쉬워할까요? 그리고 그 4분 동안 무엇을 바라보겠습니까?',
          answer: '도스토예프스키는 "나는 그 4분 동안 살았다"고 썼습니다. 끝을 본 사람만이 볼 수 있는 빛이 있다는 것. 우리는 그 빛을 기다리지 않고도 볼 수 있을까요. 매일의 끝을 잠깐 상상하는 것, 그 자체가 시야를 넓혀줄 수 있습니다.'
        },
        publishedDate: '2026년 3월'
      },
      3: {
        title: '에픽테토스와 주인의 대화',
        category: '철학·심리',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: null,
        svgKey: null,
        body: [
          '로마 시대. 한 주인에게 절름발이 노예가 있었다. 에픽테토스. 주인은 재산이 많았지만 행복하지 못했다. 노예는 가진 것이 없었지만 마음이 평온했다.',
          '어느 날 주인이 말했다. "행복해지는 법을 가르쳐주면 자유를 주겠다."',
          '에픽테토스는 대답했다. "당신이 원할 때 어떤 일이 벌어지기를 바라지 말고, 어떤 일이 벌어졌을 때 그게 바로 당신이 원하는 일이라고 생각하시오."',
          '주인은 잠시 말이 없었다. 그리고 감동하여 그를 노예 신분에서 해방시켰다.',
          '에픽테토스는 소아시아에서 노예로 태어났다. 다리를 저는 장애를 얻었고, 아무 저서도 남기지 않았다. 제자 아리아노스가 그의 강의를 정리한 《담론》과 《엥케이리디온》이 전해진다.',
          '그의 핵심 가르침은 하나였다. 통제할 수 있는 것과 통제할 수 없는 것을 구별하라. 판단, 욕망, 행동은 내 것이고, 신체, 재산, 평판은 내 것이 아니다. 진정한 자유는 외부 조건이 아니라 내면의 태도에서 온다.',
          '로마 병사들은 출정할 때 그의 책을 읽고 용기를 얻었다고 전해진다. 베트남전 포로 스톡데일 제독은 7년 반의 감금 생활에서 생존한 것이 에픽테토스 철학 덕분이라고 증언했다.',
          '현대 심리학은 그를 뒷받침한다. 행복은 유전 50%, 환경 10%, 태도 40%로 구성된다. 유전과 환경은 의지와 무관하다. 오직 태도만이 개인이 바꿀 수 있는 것이다.'
        ],
        closing: '노예가 주인에게 행복을 가르쳤다.\n그리고 그 말에 주인이 자유를 줬다.\n통제할 수 없는 것에 집착하지 않을 때, 통제할 수 있는 것이 보인다.',
        analysis: {
          insight: { icon: '💡', text: '통제할 수 있는 것(태도)과 통제할 수 없는 것(외부 사건)을 구분하는 것이 스토아 철학의 핵심.',
                     condition: '주체와 객체가 뒤바뀌는 순간' },
          humor:   { icon: '😄', text: '재산 많은 주인이 가진 것 없는 노예에게 행복을 배우는 역설.',
                     condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
          emotion: { icon: '❤️', text: '한 마디에 감동한 주인이 노예에게 자유를 준 — 말의 무게가 신분을 넘어선 순간.',
                     condition: '취약함을 숨기지 않고 마주하는 순간' }
        },
        source: {
          type: '재서술',
          credit: '에픽테토스(Epictetus, 55–135년경) / 아리아노스 정리 《담론》《엥케이리디온》 및 Diogenes Laërtius 《철학자들의 생애》에 전해지는 일화를 바탕으로 재서술했습니다.',
          url: 'https://en.wikipedia.org/wiki/Epictetus'
        },
        curatorNote: '"벌어졌을 때 그게 바로 당신이 원하는 일이라고 생각하시오." 이 한 문장이 며칠째 머릿속에서 맴돌았습니다. 원하는 대로 되지 않을 때, 그대로 받아들이는 것이 포기인지 지혜인지 — 에픽테토스는 후자라고 말합니다.',
        qna: {
          question: '지금 당신이 통제할 수 없는 것에 에너지를 쓰고 있지는 않나요? 통제할 수 있는 것은 무엇인가요?',
          answer: '에픽테토스는 외부 사건이 아니라 그것에 대한 우리의 판단이 고통을 만든다고 했습니다. 통제할 수 없는 것에 집착을 줄일 때, 통제할 수 있는 것 — 우리의 반응과 태도 — 에 집중할 여유가 생깁니다.'
        },
        publishedDate: '2026년 3월'
      },
      4: {
        title: '창백한 푸른 점',
        category: '과학·문화',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: 'images/story-pale-blue-dot.webp',
        svgKey: 4,
        body: [
          '보이저 1호가 지구를 떠났다. 해는 1977년 가을이었다. 탐사 목적은 목성과 토성이었다. 임무가 끝나면 태양계 밖으로 나가게 되어 있었다. 더 이상 돌아볼 이유가 없었다.',
          '십이 년이 지났다. 칼 세이건이 나사에 요청했다. 보이저가 태양계 끝에 다다르기 전에, 카메라를 뒤로 돌려달라고. 사진을 한 장 찍어달라고.',
          '나사 내부에서 반대가 있었다. 그 거리에서 찍은 사진은 아무것도 담기지 않을 것이다. 태양 빛이 카메라를 손상시킬 수도 있다. 과학적 가치가 없다. 세이건은 포기하지 않았다. 설득에 십 년이 걸렸다.',
          '발렌타인데이인 이듬해 2월 14일, 보이저 1호는 카메라를 돌렸다. 지구로부터 60억 킬로미터 떨어진 곳에서. 그리고 60장의 사진을 찍었다.',
          '사진을 받아보니 거의 아무것도 없었다. 광활한 검은 우주. 그 안에 태양 빛이 산란하며 만든 줄기들. 그리고 그 줄기 중 하나 위에 먼지처럼 걸린 점 하나. 그게 지구였다. 사진 속 지구의 크기는 화소 하나의 12분의 1이었다.',
          '세이건은 그 사진을 보고 이런 글을 썼다.',
          '"저것을 보라. 저게 여기다. 저게 집이다. 저게 우리다. 우리가 사랑했던 모든 사람, 우리가 알고 있던 모든 사람, 우리가 들어봤던 모든 사람, 존재했던 모든 인간이 저 위에서 살았다."',
          '"우리의 기쁨과 고통, 수천 개의 자신만만한 종교들과 이데올로기들, 모든 사냥꾼과 약탈자, 모든 영웅과 겁쟁이, 모든 문명의 창조자와 파괴자, 모든 왕과 농부, 사랑에 빠진 모든 젊은 커플들, 모든 아버지와 어머니, 모든 희망찬 아이, 발명가와 탐험가, 모든 도덕의 스승, 모든 부패한 정치인, 인류 역사 속의 모든 성인과 죄인이 저 햇빛 속에 부유하는 먼지 한 점 위에 살았다."',
          '세이건은 그 사진을 창백한 푸른 점이라고 불렀다. Pale Blue Dot.',
          '우주의 거대한 어둠 속에서 지구는 점이었다. 그 점 위에 우리가 다 있었다. 우리가 서로를 미워하고 사랑하고 전쟁을 벌이고 음악을 만들고 밥을 지어 먹던 모든 시간이 들어있었다.',
          '세이건이 그 사진을 요청한 이유를 이렇게 말했다. "우리의 거만함, 우리의 자기 중요성에 대한 망상, 우주 속에서 우리가 특별한 위치를 차지한다는 착각에 이 사진만큼 날카로운 도전을 하는 것은 없다."',
          '그것은 과학 사진이 아니었다. 철학 사진이었다.',
          '보이저 1호는 아직 달리고 있다. 매초 17킬로미터. 1990년에 찍은 그 카메라는 지금도 그 안에 있다. 더 이상 켜지지 않는 카메라로.'
        ],
        closing: '세이건은 1996년에 세상을 떠났다.\n그가 마지막으로 남긴 말들 중 이런 것이 있다.\n\n"우리 행성은 광대한 우주의 어둠 속에 있는 외로운 점이다. 이 어둠 속에서, 우리가 서로에게 더 친절해야 한다는 것보다 더 설득력 있는 것은 없다."',
        analysis: {
          insight: { icon: '💡', text: '거리가 시야를 바꾼다 — 60억 킬로미터 밖에서 보면 우리의 갈등이 먼지 위의 일이다.',
                     condition: '관점이나 입장을 바꾸면 의외의 결과가 생길 때' },
          humor:   { icon: '😄', text: '발렌타인데이에 우주에서 찍은 사진이 인류 역사상 가장 겸손하게 만드는 사진이 됐다.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '"우리가 서로에게 더 친절해야 한다" — 우주에서 돌아온 가장 단순하고 가장 어려운 결론.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '재서술',
          credit: 'Carl Sagan의 《Pale Blue Dot》(1994, Random House)과 Voyager 1 임무(NASA, 1977-현재) 역사적 사실을 바탕으로 재서술했습니다.',
          url: 'https://www.planetary.org/worlds/pale-blue-dot'
        },
        curatorNote: '세이건이 말한 "서로에게 더 친절해야 한다"는 결론이 과학 책에서 나왔다는 것이 좋았습니다. 가장 먼 곳에서 보고 와서 한 말이, 가장 가까운 곳의 이야기였습니다.',
        qna: {
          question: '60억 킬로미터 밖에서 지구를 바라본다면, 오늘 당신이 화났던 일은 얼마나 작아 보일까요?',
          answer: '창백한 푸른 점 사진이 말하는 것은 겸손입니다. 우리의 갈등과 자부심이 한 픽셀의 12분의 1에 불과하다는 것. 그 거리감이 오히려 가까운 사람에게 더 친절해질 이유를 줍니다. 세이건이 우주에서 돌아와 한 말이 "서로에게 더 친절해야 한다"였다는 것이 좋습니다.'
        },
        publishedDate: '2026년 3월'
      },
      5: {
        title: '파인만의 O링',
        category: '과학·정치',
        primaryType: '유머',
        types: ['유머', '통찰'],
        image: 'images/story-feynman.webp',
        svgKey: 5,
        body: [
          '1986년 1월 28일, 챌린저 우주왕복선이 발사 73초 만에 공중에서 분해됐다. 승무원 7명이 전원 사망했다. 미국 역사상 가장 충격적인 우주 사고였다.',
          '레이건 대통령은 조사위원회를 꾸렸다. 전직 국무장관, 최초의 달 착륙자 닐 암스트롱, 최초의 여성 우주비행사 샐리 라이드. 그리고 노벨물리학상을 받은 리처드 파인만.',
          '위원회는 수개월 동안 청문회를 열었다. 나사가 제출한 보고서는 수백 페이지였다. 엔지니어들이 줄지어 증언했다. 기술 용어가 가득한 슬라이드가 이어졌다.',
          '파인만은 따로 움직였다. 나사 청사를 돌아다니며 현장 엔지니어들을 직접 만났다. 회의실이 아니라 복도에서, 점심 식사를 하며. 그리고 한 가지를 알아냈다. 발사 당일 기온이 영하에 가까웠다. 고체로켓부스터의 이음새를 막는 고무 링 — O링 — 이 추위에 굳으면 탄성을 잃는다.',
          '청문회 당일, 파인만은 준비물을 하나 가져왔다. 얼음물 한 컵.',
          '증언 순서가 됐다. 그는 나사로부터 받은 O링 샘플 조각을 꺼냈다. C자 집게로 집어 얼음물에 담갔다. 몇 초 기다렸다. 꺼냈다. 집게를 놓자 — O링이 원래 모양으로 돌아오지 않았다.',
          '그는 마이크를 향해 말했다. "이것이 우리 문제와 관련이 있다고 생각합니다."',
          '회의장이 조용해졌다.',
          '수백 페이지 보고서와 수개월 청문회가 있었다. 그리고 한 물리학자가 얼음물 한 컵으로 30초 만에 원인을 보여줬다.',
          '파인만은 최종 보고서에 서명하지 않았다. 대신 독립 의견을 부록으로 달았다. 그 안에 이런 문장이 있었다. "기술이 성공하려면 현실이 홍보보다 앞서야 한다. 자연은 속일 수 없기 때문이다."',
          '그는 그 청문회가 있던 해 이미 신장암 진단을 받은 상태였다. 2년 후 세상을 떠났다. 마지막까지 그는 복잡한 것을 단순하게 보는 사람이었다.'
        ],
        closing: '진실은 대개 단순하다.\n복잡한 것은 진실이 아니라, 진실을 가리는 것들이다.',
        analysis: {
          insight: { icon: '💡', text: '복잡한 언어 뒤에 진실이 숨는다 — 단순하게 보여줄 수 있어야 진짜 이해다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '수백 페이지 보고서와 수개월 청문회를 얼음물 한 컵이 이겼다.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '"자연은 속일 수 없다" — 암 투병 중에도 진실 앞에서 타협하지 않은 마지막 문장.',
                     condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: {
          type: '실화',
          credit: 'Richard Feynman (1918–1988) / 대통령 우주왕복선사고조사위원회 청문회, 1986년 2월',
        },
        curatorNote: '파인만이 청문회에 얼음물 한 컵을 들고 나타났다는 장면이 자꾸 생각납니다. 준비물이 그것뿐이었다는 것. 수백 페이지 보고서를 읽은 사람들 앞에서, 그는 30초짜리 실험을 했습니다.',
        qna: {
          question: '지금 당신이 복잡하게 느끼는 문제가 있다면, 그것을 얼음물 한 컵으로 보여줄 수 있을 만큼 단순하게 말할 수 있습니까?',
          answer: '파인만이 보여준 건 물리 실험이 아니라 사고방식이었습니다. 진짜 이해는 단순하게 말할 수 있어야 한다는 것. 복잡한 언어 뒤에 숨어있는 것이 무지인지 진실인지, 그 질문을 계속 가져가는 것이 파인만식 사고입니다.'
        },
        publishedDate: '2026년 3월'
      },
      6: {
        title: '대담한 장난감 장만',
        category: '에세이·일상',
        primaryType: '유머',
        types: ['유머', '감동'],
        image: 'images/story-sat-w1.webp',
        svgKey: null,
        body: [
          '어느 날 텔레비전 뒤에 처음 보는 장난감이 여러 개 있었다. 못 보던 장난감에 놀란 가족이 모두 나서 조사한 결과, 남동생이 엄마 돈을 훔쳐 산 걸로 결론났다. 당연한 수순대로 동생은 따끔히 혼이 났다. 그 많은 장난감을 살려면 나도 경험 못한 꽤 큰 돈이 필요했을 텐데, 그에 비하면 덜 혼난 거였다.',
          '혼나는 걸 지켜보다가 이러다 엄마가 장난감을 다시 돌려주는 건 아닌지 걱정되었다. 내가 갖고 놀고 싶은 장난감도 그 가운데 있었기 때문이었다. 동생이 혼 나서 안됐긴 해도 장난감이 갑자기 생겨버린 대놓고 웃지 못할 일이었다.',
          '동심 가득한 동생이 장난감을 얼마나 갖고 싶었을까 생각해 보면, 대담한 장난감 장만은 도둑질이라기보다 일종의 항거였다. 그리고 장난감을 사긴 했는데, 여섯 식구가 방 두 칸짜리에 사는 터라 훤히 보이는 텔레비전 뒤 외에는 숨길 곳을 따로 찾지 못한 안타까운 사고였다. 나한테 상의라도 했으면 좋았을 걸.',
          '누나들은 어땠을까? 누나들도 엄마 돈을 종종 가져갔었을 게 뻔하므로 대신 들켜버린 동생이 고맙고 불쌍한 한편, 엄마한테는 미안했을 거다. 엄마가 채소장사를 하면서 하루 벌어 하루 먹고사는 상황이라 아이들에게 용돈이란 게 따로 없었고, 떳떳하게 말 못 할 돈 쓸 일이 생기면 엄마 앞치마에 몰래 손을 넣는 것 외에 다른 방도가 없었다.',
          '엄마는 마음이 더 복잡했겠다는 생각이 든다. 안 그래도 자주 돈이 없어져서 의심하던 차에 범인 잡았다고 기뻐할 수 없었다. 딸 둘, 아들 둘에게 마음껏 못 먹이고 갖고 싶은 것 못 사주는 게 오히려 한탄스러웠을 거다. 그래서 그런지 어머니는 필요할 때 언제든지 가져가라는 긋, 앞치마를 특별히 간수하지 않으셨다.',
          '어느새, 세 아들의 아빠가 되어있다. 집사람한테 돈 쓰는 게 헤프다고 한 소릴 들어도 아이들한테는 어쩔 수 없는 것 같다. 엄마를 닮아 그런가? 그게 아니라, 세상 모든 부모들이 자식 대하는 게 똑 같을 게다.'
        ],
        closing: '동생은 텔레비전 뒤가 최선이었다.\n엄마는 앞치마를 특별히 간수하지 않으셨다.\n각자의 방식으로, 가족은 사랑을 숨겼다.',
        analysis: {
          insight: { icon: '💡', text: '용돈이 없던 시절의 앞치마 — 말 못 할 것이 생기면 손이 먼저 갔다.',
                     condition: '작은 것이 사실 전부였던 이야기' },
          humor:   { icon: '😄', text: '동생이 훔쳐 온 장난감이 형한테는 뜻밖의 선물 — 안됐긴 해도 장난감이 생겼다.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '범인 잡았다고 기뻐할 수 없었던 엄마 — 앞치마를 특별히 간수하지 않으셨다.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '에세이',
          credit: 'SCJ / blog.naver.com/scjoe',
          url: 'https://blog.naver.com/scjoe'
        },
        curatorNote: '동생이 텔레비전 뒤밖에 생각 못 했다는 것이 가장 웃기면서 가장 안타깝습니다. 장난감은 샀는데 숨길 데가 없었던 것. 그리고 엄마가 앞치마를 특별히 간수하지 않으셨다는 마지막 문장이 오래 남습니다.',
        publishedDate: '2026년 3월'
      }
    }
  },
  {
    weekLabel: '2026년 3월 2주 (3/9–3/14)',
    weekStart: '2026-03-09',
    stories: {
      1: {
        title: '헬렌 켈러의 "water"',
        category: '사랑·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: 'images/story-mon.webp',
        svgKey: null,
        body: [
          '1887년 4월 5일 아침. 앨라배마 주 터스컴비아의 작은 우물가. 앤 설리번이 손잡이를 돌렸다. 물이 흘러내렸다.',
          '헬렌 켈러는 일곱 살이었다. 열아홉 달에 열병을 앓은 뒤, 보이지도 들리지도 않았다. 세계는 어둡고 소리 없는 혼돈이었다. 언어가 없었다. 이름이 없었다. 감정이 있었지만 담을 그릇이 없었다.',
          '스물한 살의 교사 앤 설리번이 몇 주째 헬렌의 손에 물건을 쥐여주고, 다른 손바닥에 철자를 손가락으로 써줬다. 헬렌은 따라 했지만 이해하지 못했다. 그것이 기호라는 것, 모든 것에 이름이 있다는 것을 몰랐다.',
          '그날, 설리번은 헬렌을 우물가로 데려갔다. 한 손에 물을 흘려보내며, 다른 손바닥에 천천히 썼다. w-a-t-e-r.',
          '그 순간을 헬렌은 나중에 이렇게 썼다. "어떤 것이 내 안에서 깨어났다. 언어의 신비가 드러났다. 나는 w-a-t-e-r가 내 손 위로 흐르는 차갑고 놀라운 바로 그것임을 알았다."',
          '그날 하루 헬렌은 서른 개의 단어를 배웠다. 우물에서 집까지 걸어오면서 닿는 것마다 이름을 물었다. 땅, 나무, 어머니, 아버지. 처음으로 모든 것이 이름을 가진 세계로 들어온 아이처럼.',
          '앤 설리번은 그로부터 27년간 헬렌의 곁에 있었다. 래드클리프 대학 강의를 헬렌의 손에 통역하며, 헬렌이 졸업할 때까지. 두 사람은 평생 손으로 말하고, 손으로 들었다.',
          '헬렌은 작가가 됐다. 열두 권의 책을 썼다. 전 세계를 돌며 강연했다. 여성 참정권, 노동권, 시각장애인 복지를 위해 싸웠다. 마크 트웨인은 말했다. "이 세기의 진짜 위대한 사람은 둘이다. 나폴레옹과 헬렌 켈러."',
          '헬렌이 그 모든 이야기 앞에 언제나 먼저 꺼낸 것은, 1887년 4월 아침 우물가 이야기였다.'
        ],
        closing: '언어가 없을 때 세계는 혼돈이었다.\n언어가 생기자 세계가 열렸다.\n이름을 배운다는 것은 단어를 아는 것이 아니다.\n연결되는 것이다.',
        analysis: {
          insight: { icon: '💡', text: '언어는 정보가 아니라 연결이다 — 이름이 생기는 순간 세상이 의미를 갖는다.',
                     condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
          humor:   { icon: '😄', text: '수십 번 반복해도 이해 못 하던 것이 어느 날 갑자기 켜진다 — 학습의 임계점.',
                     condition: '기대와 전혀 다른 방식으로 일이 풀릴 때' },
          emotion: { icon: '❤️', text: '어둠과 침묵 속 일곱 살이 처음으로 세상과 연결된 그 아침.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '실화',
          credit: '헬렌 켈러(Helen Keller, 1880–1968) / 《나의 이야기》(The Story of My Life, 1903, Doubleday) — 실제 경험을 바탕으로 재서술했습니다.',
        },
        curatorNote: '설리번이 수십 번 반복했는데도 헬렌은 이해하지 못하다가, 그날 갑자기 "켜졌습니다". 무엇이 달랐을까 자꾸 생각하게 됩니다. 준비가 됐을 때 연결이 일어나는 것인지, 아니면 연결이 일어나야 준비가 되는 것인지.',
        qna: {
          question: '당신이 처음으로 어떤 것의 "이름"을 알게 된 순간이 있나요? 몰랐다가 알게 되면서 세상이 달리 보이기 시작한 그 순간.',
          answer: '헬렌에게 "water"는 단순한 단어가 아니었습니다. 존재와 이름이 연결되는 순간이었습니다. 우리도 매일 새로운 언어를 배웁니다 — 슬픔에 이름을 붙이면 덜 무섭고, 기쁨에 이름을 붙이면 더 오래 남습니다. 이름 짓기는 세상을 여는 일입니다.'
        },
        publishedDate: '2026년 3월',
      },
      2: {
        title: '세르반테스의 감옥',
        category: '문학·역사',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: 'images/story-tue.webp',
        svgKey: null,
        body: [
          '미겔 데 세르반테스는 스물네 살에 처음 감옥에 갔다. 싸움에 연루된 혐의였다. 그러나 진짜 감옥은 그보다 훨씬 더 길었다.',
          '1571년, 세르반테스는 레판토 해전에서 오스만 제국과 싸웠다. 왼팔에 세 발의 화승총을 맞았다. 왼팔을 영원히 잃었다. 그래도 그는 그 전투가 자신이 살아서 겪은 가장 위대한 일이었다고 썼다.',
          '귀환하던 배에서 알제리 해적에게 붙잡혔다. 5년간 알제리에서 노예로 살았다. 네 번 탈출을 시도했다. 네 번 다 실패했다. 가족이 모든 재산을 팔아 몸값을 치르고서야 돌아올 수 있었다.',
          '스페인으로 돌아온 세르반테스는 세금 징수원이 됐다. 생계를 위해서였다. 그러나 회계 처리에서 문제가 생겼다. 1597년, 다시 감옥에 갔다.',
          '세비야 감옥에서 세르반테스는 이야기를 하나 구상했다. 기사 소설을 너무 많이 읽어 현실과 환상을 구분 못 하는 한 남자의 이야기. 돈키호테.',
          '1605년 《돈키호테》 1부가 출판됐다. 즉시 베스트셀러가 됐다. 유럽 전역에서 해적판이 나돌았다. 세르반테스에게 저작권 수입은 없었다.',
          '그는 계속 가난했다. 1615년 2부를 쓰면서 이미 몸이 약해져 있었다. 완성하고 한 해 뒤인 1616년 세상을 떠났다. 같은 해, 같은 날에 셰익스피어도 세상을 떠났다.',
          '후세 사람들은 《돈키호테》를 인류 최초의 근대 소설이라고 부른다. 내면을 가진 인물, 현실과 이상의 갈등, 독자를 향해 직접 말을 거는 서술자 — 근대 소설의 모든 장치가 이 책에서 시작됐다.',
          '세르반테스는 왜 풍차를 거인으로 봤던 돈키호테를 비웃지 않았다. 어쩌면 포로로 보낸 5년, 감옥에서 보낸 세월을 통해 알고 있었을 것이다. 세상에서 가장 굳건한 것은 이미 잃을 것이 없는 사람의 용기라는 것을.'
        ],
        closing: '그는 왼팔을 잃고, 5년을 포로로 살고, 감옥을 두 번 거쳤다.\n그리고 감옥에서 세계 최초의 근대 소설을 구상했다.\n실패의 시간이 걸작의 재료였다.',
        analysis: {
          insight: { icon: '💡', text: '막힌 시간이 창작의 조건이 된다 — 세르반테스가 돈키호테를 쓸 수 있었던 것은 감옥이 있었기 때문이다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '기사 소설을 너무 읽어 현실을 착각하는 남자를 쓴 사람이, 평생 현실에 치인 사람이었다는 역설.',
                     condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
          emotion: { icon: '❤️', text: '가족이 모든 재산을 팔아 몸값을 치렀다. 돌아온 뒤에도 계속 가난했다. 그래도 썼다.',
                     condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: {
          type: '실화',
          credit: '미겔 데 세르반테스(Miguel de Cervantes, 1547–1616) / 《돈키호테》(Don Quixote, 1605·1615) — 역사적 사실을 바탕으로 재서술했습니다.',
        },
        curatorNote: '"이미 잃을 것이 없는 사람의 용기." 세르반테스가 돈키호테를 비웃지 않았다는 것이 내내 마음에 남습니다. 포로 5년, 감옥 두 번을 겪은 사람이 풍차에 돌진하는 사람을 어떻게 우습게 볼 수 있었을까요.',
        qna: {
          question: '지금 당신에게 막혀 있는 시간이 있다면, 그 시간이 나중에 무엇의 재료가 될 수 있을까요?',
          answer: '세르반테스의 감옥은 그를 멈추게 했지만, 동시에 이야기를 만들게 했습니다. 막힌 시간이 반드시 낭비는 아닙니다. 다만 그 시간 안에서 무엇을 구상하느냐는 각자의 몫입니다.'
        },
        publishedDate: '2026년 3월',
      },
      3: {
        title: '융과 프로이트의 결별',
        category: '철학·심리',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1907년 2월, 카를 구스타프 융이 빈으로 프로이트를 찾아갔다. 두 사람은 처음 만나자마자 이야기를 시작했다. 13시간 동안 멈추지 않았다.',
          '프로이트는 융을 즉시 알아봤다. 유대인이 아닌 스위스 출신, 젊고 명석하고 이미 취리히에서 저명한 정신과 의사. 프로이트는 그를 후계자로 정했다. 정신분석학을 세상에 퍼뜨릴 사람.',
          '융도 프로이트를 존경했다. 아버지처럼. 꿈과 무의식, 인간의 내면에 관한 생각이 일치했다. 6년 동안 300통이 넘는 편지를 주고받았다.',
          '그러나 균열은 처음부터 있었다. 프로이트에게 모든 것의 뿌리는 성욕이었다. 리비도(libido)는 성적 에너지였다. 융은 동의하지 않았다. 인간의 욕동은 성 이상의 것이라고 생각했다.',
          '1909년, 두 사람은 함께 미국으로 배를 타고 건너갔다. 여행 중 매일 아침 꿈을 해석했다. 어느 날 프로이트가 꿈 이야기를 하다가 멈췄다. 융이 더 물어보자 프로이트는 고개를 저었다. "그 부분은 말하기 어렵다. 내 권위가 손상될 수 있다." 융은 충격을 받았다. 진실보다 권위를 택하는 사람.',
          '1912년, 융은 《리비도의 변환》을 출판했다. 리비도를 성욕이 아닌 일반적 생명 에너지로 재정의했다. 프로이트는 배신으로 받아들였다.',
          '편지가 왔다. 프로이트가 썼다. "우리의 개인적 관계가 필요 없어졌으니, 끝내기를 제안합니다." 융이 답했다. "당신의 전술을 인정하겠습니다. 분석가는 환자의 감정 전이를 이겨낼 준비가 돼 있어야 합니다. 잘 지내십시오."',
          '두 사람은 다시 만나지 않았다. 프로이트는 끝까지 융을 배신자라고 불렀다. 융은 끝까지 프로이트를 아버지라고 불렀다.',
          '그러나 결별 이후 두 사람은 각자 더 멀리 갔다. 프로이트는 자아와 무의식의 구조를 완성했다. 융은 집단무의식, 원형, 내향과 외향, 개인화 과정을 만들었다. 심리학의 두 가지 언어가 생겼다.',
          '지금도 심리학자들은 묻는다. 둘이 헤어지지 않았다면 더 멀리 갔을까, 아니면 한 사람이 다른 한 사람에게 지워져 덜 멀리 갔을까.'
        ],
        closing: '13시간 대화로 시작해, 한 통의 편지로 끝났다.\n두 사람이 함께였다면 하나의 학문이 됐을지 모른다.\n갈라섰기 때문에 두 개의 언어가 생겼다.',
        analysis: {
          insight: { icon: '💡', text: '결별이 더 풍요로운 결과를 만들 때가 있다 — 동의가 아니라 긴장이 지식을 확장한다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '꿈을 전문적으로 해석하는 두 사람이, 상대의 꿈은 끝까지 이해하지 못했다.',
                     condition: '전문가가 자신과 관련된 문제는 해결 못 할 때' },
          emotion: { icon: '❤️', text: '프로이트는 "배신자"라고, 융은 끝까지 "아버지"라고 불렀다 — 같은 관계의 다른 기억.',
                     condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: {
          type: '실화',
          credit: '카를 구스타프 융(C.G. Jung, 1875–1961) / 지크문트 프로이트(Sigmund Freud, 1856–1939) — 《프로이트-융 편지》(The Freud/Jung Letters, 1974, Princeton University Press)를 바탕으로 재서술했습니다.',
        },
        curatorNote: '"내 권위가 손상될 수 있다"는 한 마디에 융이 돌아섰다는 것. 진실보다 권위를 택하는 순간을 목격할 때의 그 실망감 — 융이 느낀 것이 그것이었을 것 같습니다.',
        qna: {
          question: '당신이 존경하던 사람에게서 처음으로 실망했던 순간이 있나요? 그 실망이 이후 당신을 어디로 이끌었나요?',
          answer: '융은 프로이트에게 실망한 뒤, 혼자만의 방향으로 갔습니다. 집단무의식, 원형 — 프로이트가 결코 가지 않았을 영역으로. 실망이 독립을 만들 때가 있습니다. 의존이 깨지면서 자신만의 목소리가 생기는 것입니다.'
        },
        publishedDate: '2026년 3월',
      },
      4: {
        title: '허블의 밤',
        category: '과학·문화',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: 'images/story-thu.webp',
        svgKey: null,
        body: [
          '1923년 10월, 캘리포니아 윌슨산 정상. 에드윈 허블은 세계에서 가장 큰 망원경 앞에 앉아 있었다. 100인치 후커 망원경. 그날 밤 그는 안드로메다 성운을 촬영했다.',
          '당시 천문학자들은 안드로메다가 우리 은하 안에 있다고 믿었다. 우주 = 우리 은하. 그 너머에 무엇이 있는지 아무도 몰랐다. 사실 아무도 그 너머가 있다고 생각하지 않았다.',
          '허블은 사진 건판에서 특별한 별 하나를 발견했다. 밝기가 주기적으로 변하는 별 — 세페이드 변광성. 이 별은 밝기 변화 주기를 알면 실제 밝기를 계산할 수 있고, 실제 밝기와 보이는 밝기를 비교하면 거리를 알 수 있었다.',
          '허블이 계산했다. 안드로메다까지의 거리는 약 90만 광년이었다. 우리 은하의 지름은 약 10만 광년. 안드로메다는 우리 은하 밖에 있었다.',
          '허블은 사진 건판 위에 적어두었던 "N" (성운, Nebula) 표시를 지웠다. 그리고 세 글자를 썼다. "VAR!" 변광성이라는 표시와 함께 느낌표를 하나 찍었다.',
          '1924년 1월, 허블은 이 발견을 편지로 미국천문학회에 보냈다. 당시 "우주는 우리 은하 하나뿐"이라는 주장을 이끌던 섀플리는 편지를 받고 동료에게 말했다. "이 편지가 내 우주를 파괴했다."',
          '하룻밤 사이에 우주의 크기가 수억 배로 커졌다. 안드로메다 하나만이 아니었다. 우주에는 수천억 개의 은하가 있었다. 우리 은하는 그중 하나에 불과했다.',
          '허블은 계속 망원경을 들여다봤다. 은하들이 서로 멀어지고 있다는 것을 발견했다. 우주가 팽창하고 있었다. 이 발견은 빅뱅 이론의 토대가 됐다.',
          '그가 발견한 것은 별의 위치만이 아니었다. 인간이 어디에 있는지였다. 수천억 개 은하 중 하나, 그 은하 가장자리 어딘가의 작은 행성 위에.'
        ],
        closing: '전날까지 우주는 우리 은하였다.\n다음 날 우주는 수천억 개의 은하가 됐다.\n한 사람이 밤새 망원경을 들여다보고\n"VAR!"이라고 썼기 때문에.',
        analysis: {
          insight: { icon: '💡', text: '우리가 알고 있다고 생각하는 세계의 경계 너머에는 언제나 더 큰 세계가 있다.',
                     condition: '관점이나 입장을 바꾸면 의외의 결과가 생길 때' },
          humor:   { icon: '😄', text: '"이 편지가 내 우주를 파괴했다" — 문자 그대로 우주가 파괴된 사람이 실재했다.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '"VAR!" 느낌표 하나 — 우주가 바뀌는 순간에 허블이 쓴 것은 세 글자뿐이었다.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '실화',
          credit: '에드윈 허블(Edwin Hubble, 1889–1953) / 윌슨산 천문대, 1923년 10월 — NASA 허블 우주망원경 역사 아카이브 및 Marcia Bartusiak, 《Einstein\'s Telescope》(2009)를 바탕으로 재서술했습니다.',
        },
        curatorNote: '허블이 "VAR!"이라고 쓴 그 사진 건판이 실제로 남아 있습니다. 캘리포니아 카네기 천문대 아카이브에. 우주가 바뀐 순간의 필체가 남아 있다는 것이 이상하게 감동적이었습니다.',
        qna: {
          question: '당신이 알고 있다고 믿었던 세계의 경계가 무너진 순간이 있나요? 그 이후 세계가 어떻게 달라졌나요?',
          answer: '허블의 발견이 충격적인 것은 숫자가 아닙니다. 어제까지 진실이었던 것이 오늘 지도를 다시 그려야 할 이유가 됐다는 것입니다. 우리의 지도도 언제든 다시 그려질 수 있습니다. 그것이 두렵기보다 흥미로운 일일 수도 있습니다.'
        },
        publishedDate: '2026년 3월',
      },
      5: {
        title: '김홍도의 마당',
        category: '예술·한국',
        primaryType: '유머',
        types: ['유머', '통찰'],
        image: 'images/story-fri.webp',
        svgKey: null,
        body: [
          '조선 영조 21년인 1745년, 경기도 어딘가에서 화가 한 명이 태어났다. 이름은 홍도, 호는 단원. 어릴 때부터 그림이 남달랐다.',
          '왕실 도화서 화원이 됐다. 임금의 얼굴을 그리고, 나라의 행사를 기록하는 자리였다. 정조가 즉위하자 단원은 왕의 총애를 받았다. 정조는 그를 보물처럼 아꼈다.',
          '그런데 단원이 그린 것은 왕실과 산수만이 아니었다.',
          '그는 마당으로 나갔다. 씨름판, 서당, 빨래터, 대장간, 주막. 이름 없는 사람들이 살아가는 장면들을 그렸다. 양반이 아니라 씨름꾼을, 임금이 아니라 서당 아이들을.',
          '《씨름》을 보면 구경꾼들의 표정이 각자 다르다. 이기는 선수를 보는 사람, 지는 선수를 보는 사람, 옆 사람과 내기하는 사람. 씨름보다 구경꾼이 더 재미있다. 18세기 조선의 마당이 그대로 거기 있다.',
          '《서당》에는 훈장이 회초리를 들고 있다. 혼이 난 아이가 눈물을 글썽이고 있다. 그런데 옆에 앉은 친구들이 웃음을 참고 있다. 훈장 눈치를 보면서 입을 틀어막고. 그 모습을 300년 전 사람이 그렸는데, 지금 봐도 그 자리에 있는 것 같다.',
          '당시 조선 회화의 관례는 산수화와 문인화였다. 이름 없는 백성의 일상을 그림의 주제로 삼는 것은 파격이었다. 그러나 정조는 단원의 풍속화를 아꼈다. 백성의 삶을 보여주는 그림이라고.',
          '단원은 그림을 팔아 생계를 이어가야 했다. 만년에는 가난하게 살았다. 언제 어디서 세상을 떠났는지도 불분명하다. 1806년이라는 기록이 있지만 확실하지 않다.',
          '지금 그의 풍속화 대부분은 국립중앙박물관에 있다. 씨름꾼도, 울다가 들킨 서당 아이도, 빨래터 여인들도 — 모두 300년을 건너와 거기 있다. 이름 없던 사람들이 이름 없는 화가 덕에 영원해졌다.'
        ],
        closing: '왕실을 그리는 화가가 마당으로 나갔다.\n이름 없는 사람들을 그렸다.\n그 이름 없는 사람들이 300년을 살아남았다.',
        analysis: {
          insight: { icon: '💡', text: '역사에 남는 것은 권력자의 얼굴이 아니라 평범한 사람의 순간이다.',
                     condition: '관점이나 입장을 바꾸면 의외의 결과가 생길 때' },
          humor:   { icon: '😄', text: '서당 아이들이 훈장 눈치 보며 웃음 참는 모습 — 300년 전이나 지금이나 같은 표정.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '이름 없는 사람들을 그림에 남긴 이름 없는 화가 — 덕분에 둘 다 영원해졌다.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '실화',
          credit: '김홍도(金弘道, 단원 檀園, 1745–1806?) / 《풍속도 화첩》(보물 제527호, 국립중앙박물관 소장) — 오주석 《단원 김홍도》(1998, 열화당)를 바탕으로 재서술했습니다.',
          url: 'https://www.museum.go.kr/site/main/relic/search/view?relicId=395'
        },
        curatorNote: '《서당》에서 훈장 몰래 웃음 참는 아이들을 보면, 300년이 순식간에 사라집니다. 그 표정이 너무 익숙해서. 김홍도가 그 순간을 남겨두지 않았으면 영원히 없었을 장면입니다.',
        qna: {
          question: '오늘 당신 주변에서 기록할 만한 "마당"의 장면이 있다면 무엇입니까? 지금 있는 그 자리의 이름 없는 순간들.',
          answer: '김홍도는 왕의 행사를 그리는 일을 하면서도, 마당의 씨름판을 그렸습니다. 역사에 남을 거라고 생각해서가 아니라 그것이 살아있는 장면이었기 때문에. 우리도 매일 마당에 있습니다. 무엇을 볼 것인지는 우리가 선택합니다.'
        },
        publishedDate: '2026년 3월',
      },
      6: {
        title: '작아지다',
        category: '에세이·일상',
        primaryType: '유머',
        types: ['유머', '감동', '통찰'],
        image: 'images/story-sat.webp',
        svgKey: null,
        body: [
          '중학교 때 학교 가는 버스를 탔는데, 모든 좌석이 꽉 차있고 혼자 서 있게 됐다. 앉아 있는 사람들이 \'조금만 일찍 타지 그랬니?\'라고 놀리는 것 같은 기분이 들었다.',
          '언짢은 기분을 견디며 앞쪽에 서 있는데, 다음 정류장에서 할머니 한 분이 타셨다. 서 있는 사람이 이제 두명이 됐으니, 덜 외로울 법했다. 근데 버스가 갑자기 출발하는 바람에 할머니가 나를 껴안더니 바깥다리 후리기로 나를 넘어 뜨렸다. 순식간에 할머니는 내 위에 올라타 있었고, 내 등은 버스 바닥에 쫙 붙어 버렸으니 완벽한 \'한 판\'이었다.',
          '놀리는 듯한 눈길들은 이제 커다란 웃음까지 동원해서 엉겁결에 가까워진 나와 할머니를 지켜보고 있었다. 오랜만에 재미난 구경이라도 한 것처럼, 기력이 없는 할머니는 아주 천천히 일어섰는데, 그동안 나는 꼼짝없이 가만히 누워있어야 했다. 일어서더니 한 마디 하셨다.',
          '\'아니 너는 남자애가 뭐 그리 힘이 없노?\'',
          '한창 클 나이였는데, 그렇게 작아지는 느낌이 들었다.',
          '커서도 작아진 적이 또 있다.',
          '어린 첫째를 데리고 목욕탕을 갔는데, 이것은 아주 손쉬우면서도 남자아이를 가진 사람만 할 수 있는 아빠노릇이었다. 즐겁게 목욕을 마치고 옷장으로 돌아와 아이 옷을 입히고 있는데, 온몸에 용 문신한 덩치 큰 사람이 옆에 서는 거였다.',
          '난생처음 보는 용 그림에 겁이 난 첫째는 해서는 안될 질문을 했다.',
          '\'아빠, 저 용 그림은 왜 하는 거야?\'',
          '험악한 덩치를 바로 곁에 두고, \'글쎄 나도 왜 하는지 모르겠다\', 또는 \'저런 거는 절대 하면 안 돼!\'라고 말할 수 없었다. 말 못 하고 머뭇거리는 시간이 길어지자, 그 덩치는 내가 뭐라 답하나 귀를 쫑긋 세우는 듯했다.',
          '\'응, 멋있어 보이라고 하는 거야\'',
          '이건 분명 내가 하고 싶은 말이 아니라, 덩치가 날 쳐다보기라도 하기 전에 생존본능에 따라 억지로 밀려나온 거짓말이었다.',
          '아들 앞이라 더욱 작아지는 경험이었다.',
          '근데 따지고 보면, 이 모두가 나만 작아질 일이 아니다. 갑자기 차를 출발시킨 기사나, 노약자에게 자리를 양보하지 않은 사람들도 부끄러워할 일이다. 그리고 전신 문신으로 공포 분위기를 조성했거나 이를 관리하지 못한 사람들도 반성해야 할 일인 것이다.',
          '한편, 이 이야기 속에는 우리를 작아지게 하는 것들이 시기에 따라 달리 그 얼굴을 드러내는 것 같다. 어린아이일 때는 두려움이 우리를 작게 하고, 청소년 시기에는 다른 사람들의 눈길이 우리를 위축시킨다. 어른이 돼서는 부모 노릇 못할 때 주눅이 들고, 노인이 되면 아무 데도 기댈 데가 없을 때 처량해진다.',
          '길게 보면 결국 우리 모두는 작은 자다. 문신으로 가리고 안 그런 척해도, 웃음으로 선행을 외면해도 작기는 마찬가지다. 우리 모두가 작다는 것을 받아들일 때, 스스로를 크게 여기는 자는 상대가 더 작지 않다는 것을 알게 되고, 스스로를 작게 여기는 자는 커질 수 있는 용기를 갖게 되지 않을까?',
          '작은 사람들끼리는 서로를 탓하기보다 함께 도우며 넘어지지 않도록 특히나 작게 느껴지지 않도록 격려할 일이다.'
        ],
        closing: '버스에서, 목욕탕에서, 아들 앞에서.\n우리는 각자의 방식으로 작아진다.\n모두가 작다는 것을 알 때, 더 이상 혼자 작지 않다.',
        analysis: {
          insight: { icon: '💡', text: '우리를 작아지게 하는 것은 나이마다 다르다 — 두려움, 눈길, 부모 노릇, 기댈 곳 없음.',
                     condition: '작은 것이 사실 전부였던 이야기' },
          humor:   { icon: '😄', text: '할머니한테 씨름 한 판 지고, 용 문신 앞에서 "멋있어 보이라고"라고 말한 아빠.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '아들 앞에서 가장 작아진다 — 그 순간이 사실 가장 솔직한 순간이다.',
                     condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: {
          type: '에세이',
          credit: 'SCJ / blog.naver.com/scjoe',
          url: 'https://blog.naver.com/scjoe'
        },
        curatorNote: '용 문신 앞에서 "멋있어 보이라고 하는 거야"라고 말했을 때, 그 말이 얼마나 빠르게 나왔을지 생각하면 웃음이 납니다. 생존본능이 부모 역할보다 빠릅니다. 그리고 그걸 솔직하게 쓸 수 있다는 것이 오히려 용기입니다.',
        publishedDate: '2026년 3월'
      }
    }
  },
  {
    weekLabel: '2026년 3월 3주 (3/16–3/21)',
    weekStart: '2026-03-16',
    stories: {
      1: {
        title: '존 키츠의 마지막 편지',
        category: '사랑·감동',
        primaryType: '감동',
        types: ['감동', '통찰'],
        image: 'images/story-keats.webp',
        svgKey: null,
        body: [
          '1820년 2월, 런던. 존 키츠는 잠에서 깨다가 기침을 했다. 손수건에 붉은 얼룩이 생겼다. 그는 의대를 다닌 사람이었다. 한눈에 알아봤다. 폐에서 나온 피. 그는 스물네 살이었다.',
          '형제 중 막내인 톰이 결핵으로 죽었다. 2년 전이었다. 키츠는 그 임종을 곁에서 지켰다. 이제 자신이 같은 피를 보고 있었다.',
          '옆집에 패니 브론이 살았다. 키츠가 사랑한 사람이었다. 그들은 약혼했지만 결혼하지 못했다. 키츠에게 돈이 없었다. 아픈 몸에 돈도 없는 시인을 패니의 어머니가 달가워하지 않았다.',
          '의사들은 따뜻한 곳으로 가라고 했다. 이탈리아. 로마의 겨울이 런던보다 낫다고. 키츠는 알고 있었다. 이것이 마지막이라는 것을. 패니를 두고 떠나는 것이 무엇을 의미하는지.',
          '1820년 9월, 키츠는 화가 친구 조지프 세번과 함께 배에 올랐다. 영국을 떠났다. 다시 돌아오지 못했다.',
          '로마에서 패니에게 편지를 썼다. "나는 당신 없이는 존재할 수 없습니다. 당신을 잊으려 하면 더 생생하게 떠오릅니다." 보내지 못한 편지도 있었다. 보내는 것이 오히려 그녀를 더 힘들게 할 것 같아서.',
          '1821년 2월, 병이 깊어졌다. 세번이 밤마다 곁에 있었다. 키츠는 음식을 거의 못 먹었다. 로마의 스페인 광장 계단 옆 작은 방에 누워, 광장의 소리를 들었다.',
          '2월 23일 밤, 키츠는 세번에게 말했다. "세번, 이제 편하게 죽을 것 같아." 그리고 숨을 거뒀다. 스물다섯 살이었다.',
          '그는 생전에 자신의 묘비명을 정해뒀다. 이름도 새기지 말라고 했다. 그 대신 이렇게 써달라고. "여기 물 위에 이름이 쓰였던 자가 누워 있다." 자신의 시가 남지 않을 것이라고 생각했다.',
          '패니 브론은 평생 그 편지들을 간직했다. 60세가 넘어서야 결혼했다. 키츠의 편지는 지금도 남아 있다. 《오드》는 영어 시 중 가장 많이 읽히는 작품 중 하나가 됐다.'
        ],
        closing: '스물다섯 살에 세상을 떠났다.\n자신의 이름이 물 위에 쓰였다고 생각했다.\n지금 그의 시는 200년 뒤에도 읽힌다.',
        analysis: {
          insight: { icon: '💡', text: '사라진다고 생각하고 쓴 것이 남는다 — 키츠는 자신이 잊힐 것이라 믿었다.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' },
          humor:   { icon: '😄', text: '죽기 전 자신의 묘비명을 직접 정했다 — "이름도 새기지 말라"는 이름 없는 시인.',
                     condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
          emotion: { icon: '❤️', text: '"나는 당신 없이는 존재할 수 없습니다" — 보내지 못한 편지들이 남아 있다.',
                     condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: {
          type: '실화',
          credit: '존 키츠(John Keats, 1795–1821) / 패니 브론에게 보낸 편지들(Letters to Fanny Brawne, 1878년 출판) 및 Andrew Motion 《Keats》(1997, Farrar Straus & Giroux)를 바탕으로 재서술했습니다.',
        },
        curatorNote: '"여기 물 위에 이름이 쓰였던 자가 누워 있다." 키츠가 직접 정한 묘비명입니다. 자신이 잊힐 것이라 생각했다는 것. 그런데 200년이 지났습니다.',
        qna: {
          question: '사라진다고 생각하면서도 남겨둔 것이 있나요? 잊힐 것을 알면서도 쓴 말, 보낸 편지, 한 행동.',
          answer: '키츠는 자신의 시가 남지 않을 것이라 믿었습니다. 그러나 그것이 그를 멈추지 않았습니다. 남는다는 확신이 없어도 쓸 수 있다는 것. 사라진다고 생각하고 한 것이 오히려 오래 남을 때가 있습니다.'
        },
        publishedDate: '2026년 3월',
      },
      2: {
        title: '프루스트의 마들렌',
        category: '문학·역사',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1909년 겨울, 파리. 마르셀 프루스트는 홍차 한 잔을 받았다. 어머니가 내온 것이었다. 마들렌 한 조각이 함께 왔다. 조개 모양의 작은 케이크.',
          '그는 무심코 마들렌 한 조각을 홍차에 적셔 입에 넣었다. 그 순간 무언가가 일어났다.',
          '갑자기, 어린 시절 여름 방학을 보내던 콩브레가 돌아왔다. 이모할머니 레오니의 집. 아침마다 홍차에 마들렌을 적셔 주시던 그분. 집 앞 정원의 꽃들. 마을 광장. 성당. 그 여름의 빛과 냄새와 소리가 한꺼번에 밀려왔다. 기억이 돌아온 것이 아니었다. 그 시절 자체가 돌아왔다.',
          '프루스트는 이것을 기억이 아니라 시간이라고 불렀다. 의식이 불러온 기억은 생각으로만 존재한다. 그러나 감각이 불러온 기억은 몸으로 돌아온다. 잃어버린 시간을 되찾는 유일한 방법은 의지가 아니라 우연이었다.',
          '그는 여기서 소설의 단초를 잡았다. 7권짜리 소설. 제목은 《잃어버린 시간을 찾아서》.',
          '프루스트는 파리 오스만 대로의 아파트에 살았다. 천식이 심했다. 소음에도 예민했다. 침실 벽 전체를 코르크로 덧댔다. 소리가 차단됐다. 그 방에서 주로 밤에 글을 썼다.',
          '1913년 1권이 출판됐다. 거절이 먼저였다. 앙드레 지드가 편집자로 있던 출판사에서 거절했다. 지드는 나중에 이것을 평생 가장 후회한 결정이라고 했다. 결국 자비로 출판됐다.',
          '소설은 4,000페이지가 넘는다. 한 문장이 페이지를 넘기는 경우도 있다. 프루스트는 마지막 3권을 완성하고 5주 뒤 세상을 떠났다. 1922년이었다.',
          '마들렌 장면은 1권 첫 부분에 있다. 전체 4,000페이지의 씨앗이다. 홍차에 적신 과자 한 조각이 없었다면 20세기 최대의 소설도 없었다.'
        ],
        closing: '기억은 의지로 부를 수 없다.\n냄새가, 맛이, 질감이 불러온다.\n잃어버린 시간은 감각 속에 잠들어 있다.',
        analysis: {
          insight: { icon: '💡', text: '의식적 기억과 감각적 기억은 다르다 — 몸이 기억하는 것은 마음이 지울 수 없다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '지드가 거절한 원고가 20세기 최대의 소설이 됐다 — 평생의 후회.',
                     condition: '기대와 전혀 다른 방식으로 일이 풀릴 때' },
          emotion: { icon: '❤️', text: '홍차에 적신 마들렌 한 조각이 잃어버린 여름 전체를 돌려줬다.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '재서술',
          credit: '마르셀 프루스트(Marcel Proust, 1871–1922) / 《잃어버린 시간을 찾아서》(À la recherche du temps perdu, 1913–1927) 및 Edmund White 《Proust》(1999, Penguin Lives)를 바탕으로 재서술했습니다.',
        },
        curatorNote: '마들렌 장면을 처음 읽었을 때, 저도 비슷한 것을 떠올렸습니다. 냄새나 맛으로 갑자기 오래전 장면이 완전히 살아 돌아오는 경험. 그것이 기억이 아니라 시간이 돌아오는 것이라는 말이 정확하게 느껴졌습니다.',
        qna: {
          question: '어떤 냄새나 맛이나 소리가 당신에게 잃어버린 시간을 돌려주나요? 그것이 데려가는 곳은 어디인가요?',
          answer: '프루스트가 발견한 것은 시간을 되찾는 방법이 의지가 아니라는 것이었습니다. 억지로 기억하려 해도 생각만 떠오릅니다. 그러나 감각은 그 시절의 몸을 그대로 데려옵니다. 지금 당신의 마들렌은 무엇입니까.'
        },
        publishedDate: '2026년 3월',
      },
      3: {
        title: '윌리엄 제임스의 일기',
        category: '철학·심리',
        primaryType: '통찰',
        types: ['통찰', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1870년 4월, 보스턴. 윌리엄 제임스는 스물여덟 살이었다. 하버드 의대를 졸업했고, 독일에서 생리학을 공부했고, 다윈을 읽었고, 헬름홀츠를 읽었다. 그리고 완전히 무너져 있었다.',
          '원인은 명확하지 않았다. 신체 질환도 있었다. 눈이 좋지 않았고 등이 아팠다. 그러나 더 깊은 곳에 무언가가 있었다. 삶의 의미를 찾지 못하는 감각. 아무것도 진짜가 아닌 것 같은 느낌. 지금이라면 우울증이라고 불렀을 상태였다.',
          '그는 당시 지배적인 철학인 결정론에 사로잡혀 있었다. 모든 것은 원인과 결과로 연결되어 있다. 인간의 선택도 뇌의 화학적 상태가 만드는 필연이다. 자유의지는 환상이다. 그렇다면 내가 무언가를 노력한다는 것이 무슨 의미가 있는가.',
          '1870년 4월 30일, 그는 일기에 한 문장을 썼다.',
          '"오늘부터, 내 자유의지의 첫 번째 행위는 자유의지를 믿는 것으로 한다."',
          '철학적 주장이 아니었다. 증명도 아니었다. 실험이었다. 자유의지가 있다고 믿어보고, 그렇게 살아보기로 했다. 결과가 달라지면 믿음이 맞는 것이다.',
          '그것이 그의 철학이 됐다. 프래그머티즘. 진리는 그것이 참인지 거짓인지로 판단하는 것이 아니라, 그것이 삶에서 어떻게 작동하는지로 판단한다는 생각.',
          '그는 하버드에서 심리학 강의를 시작했다. 미국 최초의 심리학 실험실을 만들었다. 1890년 《심리학의 원리》를 출판했다. 1,400페이지짜리 책이었다. 지금도 심리학 교과서로 읽힌다.',
          '그는 말했다. "우리 세대의 가장 위대한 발견은, 인간이 마음의 태도를 바꿈으로써 삶을 바꿀 수 있다는 것이다."',
          '일기의 그 한 문장이 출발이었다. 믿어보기로 했기 때문에, 믿을 수 있게 됐다.'
        ],
        closing: '자유의지를 믿겠다는 첫 번째 자유의지.\n증명해서 믿은 것이 아니라,\n믿어보기로 해서 증명하게 됐다.',
        analysis: {
          insight: { icon: '💡', text: '행동이 믿음을 만든다 — 증명한 뒤에 믿는 것이 아니라, 믿어보기로 할 때 증명이 시작된다.',
                     condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
          humor:   { icon: '😄', text: '자유의지의 첫 번째 행위로 자유의지를 믿기로 했다 — 논리적으로 묘한 문장.',
                     condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
          emotion: { icon: '❤️', text: '완전히 무너진 스물여덟 살이 일기에 한 문장을 쓰고, 그것이 철학이 됐다.',
                     condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: {
          type: '실화',
          credit: '윌리엄 제임스(William James, 1842–1910) / 1870년 4월 30일 일기 및 Louis Menand 《The Metaphysical Club》(2001, Farrar Straus & Giroux)을 바탕으로 재서술했습니다.',
        },
        curatorNote: '"오늘부터, 내 자유의지의 첫 번째 행위는 자유의지를 믿는 것으로 한다." 이 문장이 한동안 마음에 걸렸습니다. 증명하고 나서 믿는 것이 아니라, 믿어보기로 한 것이 출발이었다는 것.',
        qna: {
          question: '지금 당신이 믿어보기로 결심하면 달라질 수 있는 것이 있나요? 증명을 기다리지 않고 먼저 믿어보는 것.',
          answer: '제임스의 일기는 철학이 아니라 처방이었습니다. 우울한 스물여덟이 자신에게 쓴 처방. 믿어보기로 하는 것이 때로 유일한 출구입니다. 행동이 믿음을 기다리지 않아도 될 때, 믿음이 행동을 따라옵니다.'
        },
        publishedDate: '2026년 3월',
      },
      4: {
        title: '보어와 아인슈타인의 논쟁',
        category: '과학·문화',
        primaryType: '통찰',
        types: ['통찰', '유머'],
        image: null,
        svgKey: null,
        body: [
          '1927년 10월, 브뤼셀. 솔베이 회의장. 세계 물리학자 29명이 모였다. 아인슈타인도 있었다. 보어도 있었다. 그 자리에서 논쟁이 시작됐고, 30년이 지나도 끝나지 않았다.',
          '주제는 양자역학이었다. 전자는 관측하기 전에는 위치가 정해져 있지 않다. 확률로만 존재한다. 관측하는 순간 하나의 상태로 결정된다. 보어와 하이젠베르크가 이끄는 코펜하겐 해석이었다.',
          '아인슈타인은 동의하지 않았다. "신은 주사위를 던지지 않는다." 우주는 근본적으로 결정론적이어야 한다. 우리가 모르는 것뿐이지, 실재는 확정되어 있다.',
          '보어가 받아쳤다. "아인슈타인, 신에게 무엇을 해야 한다고 지시하지 마시오."',
          '아인슈타인은 매년 사고 실험을 들고 왔다. "이런 상황을 설명할 수 있겠소?" 보어는 매년 밤을 새워 답을 찾아냈다. 다음 날 아침 반박했다.',
          '1935년, 아인슈타인은 동료 두 명과 함께 논문을 발표했다. EPR 논문. 양자역학이 불완전하다는 것을 이론적으로 보이려 했다. 두 입자를 얽히게 한 뒤 하나를 측정하면 다른 하나가 즉시 영향을 받는다는 것은 말이 되지 않는다. 빛보다 빠른 것은 없으니까.',
          '보어가 답했다. 그것이 오히려 양자역학이 옳다는 증거라고. 얽힌 두 입자는 거리가 아무리 멀어도 하나처럼 행동한다.',
          '두 사람은 서로를 깊이 존중했다. 논쟁 중에도 편지를 주고받았다. 1955년 아인슈타인이 세상을 떠났다. 보어의 책상 위에는 아인슈타인의 사진이 있었다.',
          '1964년, 존 벨이 이론을 제시했다. 실험으로 판가름할 수 있다고. 1970년대부터 실험이 진행됐다. 결과는 보어 쪽이었다. 신은 주사위를 던지고 있었다.',
          '보어도 그때는 세상을 떠난 뒤였다.'
        ],
        closing: '두 사람은 30년간 논쟁했다.\n둘 다 죽은 뒤에 실험이 판결을 내렸다.\n우주는 그동안 줄곧 주사위를 던지고 있었다.',
        analysis: {
          insight: { icon: '💡', text: '가장 좋은 논쟁은 둘 다 더 날카로워지게 한다 — 보어와 아인슈타인은 서로 덕분에 더 정밀해졌다.',
                     condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
          humor:   { icon: '😄', text: '"신은 주사위를 던지지 않는다" vs "신에게 지시하지 마시오" — 신이 가장 많이 등장한 물리학 논쟁.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '보어 책상 위에 있던 아인슈타인의 사진 — 30년 논쟁 상대가 가장 존경하는 사람이었다.',
                     condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
        },
        source: {
          type: '실화',
          credit: '닐스 보어(Niels Bohr, 1885–1962) / 알베르트 아인슈타인(Albert Einstein, 1879–1955) / 솔베이 회의 1927·1930, EPR 논문 1935 — Abraham Pais 《Niels Bohr\'s Times》(1991, Oxford University Press)를 바탕으로 재서술했습니다.',
        },
        curatorNote: '보어의 책상 위에 아인슈타인 사진이 있었다는 것이 이 이야기에서 가장 오래 남습니다. 30년간 틀렸다고 주장한 사람의 사진을 책상 위에 두는 것. 그게 논쟁이 아니라 대화였다는 증거 같습니다.',
        qna: {
          question: '당신이 오랫동안 틀렸다고 생각한 사람에게서 배운 것이 있나요? 논쟁이 오히려 서로를 날카롭게 만든 경험.',
          answer: '아인슈타인과 보어의 논쟁이 30년 동안 생산적이었던 것은 둘 다 틀릴 수 있다는 것을 전제했기 때문입니다. 아인슈타인은 결국 틀렸지만, 그 덕분에 보어의 이론은 더 정밀해졌습니다. 가장 좋은 반론은 우리를 더 선명하게 만들어줍니다.'
        },
        publishedDate: '2026년 3월',
      },
      5: {
        title: '오스카 와일드의 마지막 말',
        category: '예술·문화',
        primaryType: '유머',
        types: ['유머', '감동'],
        image: null,
        svgKey: null,
        body: [
          '1895년, 런던. 오스카 와일드는 잉글랜드에서 가장 유명한 작가였다. 〈진지함의 중요성〉이 무대에 오르고 있었다. 〈이상적인 남편〉도 마찬가지였다. 두 편이 동시에 웨스트엔드에서 공연 중이었다. 객석은 매일 찼다.',
          '그해 2월, 어리석은 결정을 했다. 퀸즈베리 후작을 명예훼손으로 고소한 것이었다. 후작의 아들 앨프레드 더글러스와 사귀는 것을 안 후작이 와일드를 공개적으로 비난했다. 와일드는 소송으로 맞섰다.',
          '재판이 뒤집혔다. 오히려 와일드가 기소됐다. 동성 관계에 대한 혐의였다. 1895년 5월, 유죄 판결을 받았다. 징역 2년, 중노동.',
          '레딩 감옥. 와일드는 날마다 돌을 깼다. 런던에서 가장 번뜩이는 대화를 나누던 사람이 감방에 있었다. 건강이 무너졌다. 귀 안쪽에 감염이 생겼고, 그것이 이후 그를 계속 괴롭혔다.',
          '1897년 5월, 풀려났다. 영국으로 돌아갈 수 없었다. 파리로 갔다. 세바스찬 멜모스라는 가명을 썼다. 아무도 속지 않았다.',
          '파리에서 3년을 살았다. 돈이 없었다. 친구들이 조금씩 도왔다. 글을 쓰려 했지만 잘 쓰이지 않았다. 레딩 감옥 체험을 바탕으로 쓴 시 〈레딩 감옥의 노래〉가 마지막 작품이 됐다.',
          '1900년 가을, 오스카 와일드는 파리의 작은 호텔 방에 누웠다. 알자스 호텔. 방은 좁고 벽지는 낡았다. 귀의 감염이 뇌로 번졌다.',
          '임종이 가까워졌다. 친구 로버트 로스가 곁에 있었다. 와일드는 한마디를 남겼다.',
          '"나와 이 벽지 중 하나는 죽어야 한다."',
          '11월 30일, 세상을 떠났다. 마흔여섯 살이었다. 파리 페르 라셰즈 묘지에 묻혔다. 지금도 그의 무덤에는 전 세계에서 찾아온 사람들의 립스틱 자국이 남아 있다.'
        ],
        closing: '잉글랜드 최고의 재치가\n낡은 파리 호텔 방에서 마지막 농담을 남겼다.\n죽는 순간에도 그는 와일드였다.',
        analysis: {
          insight: { icon: '💡', text: '유머는 고통을 부정하는 것이 아니라 고통보다 크게 서는 방식이다.',
                     condition: '주체와 객체가 뒤바뀌는 순간' },
          humor:   { icon: '😄', text: '"나와 이 벽지 중 하나는 죽어야 한다" — 임종 직전 와일드의 마지막 비평.',
                     condition: '기대와 전혀 다른 방식으로 일이 풀릴 때' },
          emotion: { icon: '❤️', text: '두 편을 동시에 웨스트엔드에 올린 사람이 5년 뒤 이름도 바꾸고 파리 허름한 방에서 죽었다.',
                     condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
        },
        source: {
          type: '실화',
          credit: '오스카 와일드(Oscar Wilde, 1854–1900) / 알자스 호텔, 파리, 1900년 11월 30일 — Richard Ellmann 《Oscar Wilde》(1988, Alfred A. Knopf)를 바탕으로 재서술했습니다.',
        },
        curatorNote: '"나와 이 벽지 중 하나는 죽어야 한다." 농담이지만 농담이 아닙니다. 그 방이 어떤 방이었는지 알면서 읽으면, 웃음과 안타까움이 동시에 옵니다. 죽는 순간까지 자신이었다는 것이 오히려 위대해 보입니다.',
        qna: {
          question: '당신이 가장 힘든 순간에도 잃지 않은 것이 있나요? 무너지는 상황에서도 변하지 않은 당신다운 것.',
          answer: '와일드는 감옥에서도, 이름을 바꾸고 파리에서 가난하게 살 때도 재치를 잃지 않았습니다. 그것이 그의 남은 존엄이었습니다. 가장 자신다운 것이 가장 마지막까지 남습니다. 그것이 무엇인지 아는 사람은 어떤 상황에서도 완전히 무너지지 않습니다.'
        },
        publishedDate: '2026년 3월',
      },
      6: {
        title: '긁기 자격증',
        category: '에세이·일상',
        primaryType: '유머',
        types: ['유머', '감동'],
        image: 'images/story-sat-w3.webp',
        svgKey: null,
        body: [
          '며칠 전에 막내가 긁기자격증을 할머니에게 발급해 주었다.',
          '자세히 보면, 이 자격증에는 파마머리의 할머니가 그려져 있다. 유효기간도 2067년까지로 표시된 걸로 보니, 막내는 할머니가 127세까지 살기를 바라는 것 같다.',
          '온몸 구석구석을 두드리거나 만지면서 피로를 풀어주는 마사지도 자격증이 있는데, 긁기라고 자격증이 없으란 법은 없다.',
          '긁기는 마사지보다 훨씬 더 개인적이며 손톱 각도와 가려운 위치 파악이 관건이고, 돈을 받을 정도로 숙련된 기술을 필요로 하진 않는다. 개인적인 만큼 더 친밀한 관계에서 이루어지고, 요금은 받지 않지만 애정이 듬뿍 담겨 있다.',
          '특히, 어린시절 아토피를 심하게 겪는 집안내력을 감안하면, 긁기자격증을 받을 정도라는 것은 수년간 함께 밤잠 설치면서 실천하지 않으면 도무지 불가능한 일이다.',
          '삶으로 온전히 뒷받침되어야만 받을 수 있는 긁기자격증은 그 어떤 국가공인자격증도 갖추지 못한 희귀성과 신뢰도를 자랑한다. 어찌 보면 긁기자격증 같은 것은 자격증이 남발될 뿐 아니라 그에 대한 불신마저 팽배한 현시대가 잃어버리고 있는 그 무엇인지 모른다. 또한, 이 자격은 돈을 내고 받는 서비스가 결코 주지 못하는 울림과 기억도 동반한다.',
          '긁기자격증은 이런 생각을 갖게 한다.',
          '우리가 상업화와 전문화를 외치면서 경제성장만을 논할 게 아니라, 순수한 아이와 조건 없이 사랑을 베푸는 할머니와 이들이 함께 엮어 가는 삶의 이야기에 주목해야 하는 건 아닐까? 미래세대가 기성세대에게 감사의 표시로 무슨 자격증 같은 거라도 줄만큼 미래는 과연 전망이 밝은가? 천진난만한 순수함과 온전한 사랑, 그리고 이들이 만드는 기발함과 유쾌함이 우리가 살면서 그토록 바랐지만 놓쳐버렸던 소중한 것들이 아닐까?',
          '그나저나 막내의 기발함은 계속되고 있다. 의자로 바닥에 앉기, 마스크를 브래지어로 재활용하기, 냉동실 열어 엉덩이 식히기, 커텐으로 초콜렛처럼 되기 그리고 공중부양까지……'
        ],
        closing: '자격증은 돈으로 딸 수 있다.\n긁기자격증은 수년의 밤잠으로 딴다.\n그 어떤 국가공인자격증도 갖추지 못한\n희귀성과 신뢰도.',
        analysis: {
          insight: { icon: '💡', text: '상업화 시대가 잃어버린 것 — 돈을 내고 받는 서비스가 결코 줄 수 없는 울림과 기억.',
                     condition: '작은 것이 사실 전부였던 이야기' },
          humor:   { icon: '😄', text: '유효기간 2067년 — 막내는 할머니가 127세까지 살기를 바란다.',
                     condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
          emotion: { icon: '❤️', text: '아토피로 함께 밤잠 설치던 수년 — 그게 자격이 됐다.',
                     condition: '아주 작은 순간이 사실 전부였던 이야기' }
        },
        source: {
          type: '에세이',
          credit: 'SCJ / blog.naver.com/scjoe',
          url: 'https://blog.naver.com/scjoe/222651987009'
        },
        curatorNote: '유효기간 2067년이라는 숫자가 오래 남습니다. 막내가 의식했는지 모르겠지만, 할머니가 127살까지 살기를 바라는 마음이 그 숫자 안에 있습니다. 그리고 아토피로 밤잠 설치며 쌓인 세월이 자격증이 됐다는 것. 어떤 시험도 이것을 줄 수 없습니다.',
        publishedDate: '2026년 3월 21일'
      }
    }
  }
  ,
  {
    weekLabel: '2026년 3월 4주 (3/23–3/28)',
    weekStart: '2026-03-23',
    stories: {

  /* ═══ 월요일 — 문학·역사 (PRIMARY: 통찰) ═══ */
  1: {
    title: '제인 오스틴의 "By a Lady"',
    category: '문학·역사',
    primaryType: '통찰',
    types: ['통찰', '감동'],
    image: 'images/제인 오스틴의 by a lady.webp',
    svgKey: null,
    body: [
      '1811년 런던. 서점에 새 소설이 들어왔다. 《이성과 감성》. 저자란에는 이름이 없었다. "By a Lady(한 숙녀가 지음)"라고만 적혀 있었다.',
      '그 숙녀는 제인 오스틴이었다. 그녀는 서른다섯 살이었다.',
      '오스틴은 20대 초반부터 소설을 썼다. 1797년, 아버지가 그녀의 원고를 출판사에 보냈다. 제목은 《첫인상》이었다. 나중에 《오만과 편견》이 되는 소설이었다. 출판사는 원고를 읽지도 않고 돌려보냈다.',
      '10년이 넘는 시간이 흘렀다. 오스틴은 계속 썼다. 가족들의 거실 한쪽 구석에서, 서랍장에 원고를 숨기며, 방문객이 오면 글쓰기를 멈추며 썼다. 당시 여성에게 글쓰기는 공적인 일이 될 수 없었다. 특히 소설은.',
      '1811년, 드디어 출판됐다. 그러나 이름은 쓸 수 없었다. 여성의 이름이 붙은 소설은 진지하게 읽히지 않는다는 것을 오스틴은 알고 있었다. "By a Lady." 그 두 단어가 타협이었다.',
      '1813년 《오만과 편견》이 출판됐다. 이번에는 "《이성과 감성》의 저자가 지음"이라고 적혔다. 그래도 이름은 없었다.',
      '오스틴이 살아 있는 동안 그녀의 이름은 단 한 번도 소설 표지에 오르지 않았다. 그녀가 죽은 뒤, 오빠 헨리가 《노생거 사원》의 서문에 처음으로 "제인 오스틴"이라고 썼다.',
      '그녀가 태어나고 200년이 지났다. 그녀의 얼굴은 영국 10파운드 지폐에 새겨져 있다.'
    ],
    closing: '"By a Lady."\n이름을 쓸 수 없었던 시대에 쓴 소설이\n200년이 지나 지폐에 새겨졌다.',
    analysis: {
      insight: { icon: '💡', text: '익명이 오히려 작품을 남겼다 — 이름을 지운 것이 이름을 지키는 방법이었다.',
                 condition: '주체와 객체가 뒤바뀌는 순간' },
      humor:   { icon: '😄', text: '"By a Lady" — 이름 대신 성별로만 표시된 작가. 그 작가가 영국 문학의 대표가 됐다.',
                 condition: '기대와 전혀 다른 방식으로 일이 풀릴 때' },
      emotion: { icon: '❤️', text: '방문객이 오면 글쓰기를 멈추며, 거실 구석에서 썼다. 그 원고가 오만과 편견이었다.',
                 condition: '아주 작은 순간이 사실 전부였던 이야기' }
    },
    source: {
      type: '실화',
      credit: '제인 오스틴(Jane Austen, 1775–1817) / 《이성과 감성》(Sense and Sensibility, 1811) 초판 기록, Claire Tomalin 《Jane Austen: A Life》(1997, Alfred A. Knopf)를 바탕으로 재서술했습니다.',
    },
    curatorNote: '"By a Lady." 두 단어가 긴 이야기를 담고 있습니다. 진지하게 읽히기 위해 이름을 지운 것. 그 타협 덕분에 우리가 오스틴을 읽을 수 있게 됐는지도 모릅니다.',
    qna: {
      question: '당신이 하고 싶은 것을 하기 위해 무언가를 감춰야 했던 적이 있나요? 인정받기 위해 조건을 받아들인 경험.',
      answer: '오스틴은 이름을 포기함으로써 작품을 남겼습니다. 때로 인정받는 방법은 자신을 숨기는 것입니다. 그러나 결국 남는 것은 작품이고, 작품이 이름을 되찾아줍니다.'
    },
    publishedDate: '2026년 3월 23일',
  },

  /* ═══ 화요일 — 문학·역사 (PRIMARY: 감동) ═══ */
  2: {
    title: '가르시아 마르케스의 첫 문장',
    category: '문학·역사',
    primaryType: '감동',
    types: ['감동', '통찰'],
    image: null,
    svgKey: null,
    body: [
      '1965년 어느 여름날, 멕시코시티. 가브리엘 가르시아 마르케스는 가족과 함께 아카풀코로 휴가를 떠나고 있었다. 차를 몰고 있었다. 아내 메르세데스와 두 아들이 뒤에 타고 있었다.',
      '고속도로 어딘가에서 한 문장이 왔다.',
      '"여러 해가 지난 뒤, 총살 집행 부대 앞에 선 아우렐리아노 부엔디아 대령은 아버지가 처음으로 얼음을 구경시켜 주던 그 먼 오후를 떠올리게 될 것이다."',
      '가르시아 마르케스는 핸들을 꺾었다. 차를 돌렸다. 멕시코시티로 돌아갔다.',
      '집에 돌아온 그는 서재에 들어갔다. 그리고 18개월간 거의 나오지 않았다.',
      '아내 메르세데스가 나머지를 처리했다. 집세가 밀렸다. 전기세가 밀렸다. 식료품을 외상으로 샀다. 믹서기를 전당포에 맡겼다. 헤어드라이어도 맡겼다. 전기다리미도 맡겼다. 가르시아 마르케스에게는 아무것도 말하지 않았다. 집필이 끊겨서는 안 됐다.',
      '18개월 후, 원고가 완성됐다. 부에노스아이레스의 편집자에게 원고를 보내려고 했다. 우편 요금이 82페소 필요했는데 돈이 53페소뿐이었다. 원고 절반만 보냈다. 나중에 나머지 절반을 보냈다.',
      '편집자는 원고를 받자마자 답장을 썼다. "이 소설은 노벨문학상을 받을 것입니다."',
      '1967년, 《백년의 고독》이 출판됐다. 1982년, 가르시아 마르케스는 노벨문학상을 받았다.',
      '메르세데스는 나중에 말했다. "나는 항상 우리가 될 것이라는 걸 알았어요. 하지만 그 믹서기는 아직도 아쉬워요."'
    ],
    closing: '한 문장이 왔을 때, 차를 돌렸다.\n그리고 그 문장은 18개월이 됐다.\n믹서기를 전당포에 맡긴 아내가 없었다면,\n그 문장은 아무것도 아니었을 것이다.',
    analysis: {
      insight: { icon: '💡', text: '창작의 순간은 혼자 오지만 실현은 혼자 되지 않는다 — 위대한 작품 뒤에는 맡겨진 믹서기가 있다.',
                 condition: '작은 변화 하나가 전혀 다른 결과로 이어질 때' },
      humor:   { icon: '😄', text: '노벨상 원고를 돈이 없어 절반만 보냈다 — 나머지 절반은 나중에.',
                 condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
      emotion: { icon: '❤️', text: '"믹서기는 아직도 아쉬워요" — 남편의 노벨상보다 믹서기를 기억하는 아내.',
                 condition: '아주 작은 순간이 사실 전부였던 이야기' }
    },
    source: {
      type: '실화',
      credit: '가브리엘 가르시아 마르케스(Gabriel García Márquez, 1927–2014) / Gerald Martin 《Gabriel García Márquez: A Life》(2009, Alfred A. Knopf)를 바탕으로 재서술했습니다.',
    },
    curatorNote: '메르세데스가 믹서기를 전당포에 맡겼다는 것. 그리고 "믹서기는 아직도 아쉬워요"라고 말했다는 것이 오래 남습니다. 《백년의 고독》 뒤에는 전당포에 맡긴 믹서기와 그것을 아무 말 없이 맡긴 사람이 있었습니다.',
    qna: {
      question: '당신 뒤에서 말없이 버텨준 사람이 있나요? 그 사람이 맡긴 믹서기는 무엇이었나요?',
      answer: '《백년의 고독》은 가르시아 마르케스 혼자 쓴 것이 아니었습니다. 메르세데스가 없었다면 그 18개월은 불가능했습니다. 위대한 창작 뒤에는 항상 그 창작을 지키기 위해 다른 무언가를 포기한 사람이 있습니다.'
    },
    publishedDate: '2026년 3월 24일',
  },

  /* ═══ 수요일 — 예술·감동 (PRIMARY: 감동) ═══ */
  3: {
    title: '프리다 칼로의 천장 거울',
    category: '예술·감동',
    primaryType: '감동',
    types: ['감동', '통찰'],
    image: 'images/프리다 칼로의 천장 거울.webp',
    svgKey: null,
    body: [
      '1925년 9월 17일, 멕시코시티. 열여덟 살의 프리다 칼로는 버스를 타고 있었다. 버스가 전차와 충돌했다.',
      '뼈가 부러졌다. 척추가 세 곳에서 골절됐다. 쇄골이 부러졌다. 오른쪽 다리가 열한 군데 골절됐다. 금속 손잡이가 몸을 관통했다.',
      '의사들은 살기 어렵다고 했다. 살았다. 그러나 침대에 누워 있어야 했다. 한 달이 지나고, 두 달이 지났다.',
      '어머니가 무언가를 만들었다. 누울 수 있는 자세에서도 그림을 그릴 수 있도록 이젤을 개조했다. 그리고 침대 천장에 거울을 달았다.',
      '칼로는 위를 바라봤다. 거울 속에 자신이 있었다. 그녀는 그 얼굴을 그리기 시작했다.',
      '"나는 자주 혼자 있고, 내가 가장 잘 아는 주제가 나 자신이기 때문에 나를 그린다."',
      '55점의 자화상이 이렇게 시작됐다. 고통이 주제가 됐다. 부러진 척추가 캔버스에 그려졌다. 꿰뚫린 몸이 그려졌다. 그러나 눈은 항상 정면을 향했다.',
      '그녀는 평생 35번의 수술을 받았다. 그 사이에도 그렸다. 석고 코르셋을 입은 채 그렸다. 서 있을 수 없을 때는 누워서 그렸다.',
      '1953년, 멕시코시티에서 칼로의 첫 개인전이 열렸다. 의사들은 참석을 금지했다. 그녀는 구급차로 이동해 침대째 전시장으로 들어왔다. 그리고 침대에 누운 채로 자신의 전시를 봤다.',
      '천장 거울 앞에 누웠던 열여덟 살이, 28년 후 자신의 전시장에 침대째 들어왔다.'
    ],
    closing: '천장 거울이 없었다면,\n세상은 55점의 자화상을 갖지 못했을 것이다.\n고통이 그림이 됐고,\n침대가 화실이 됐다.',
    analysis: {
      insight: { icon: '💡', text: '한계가 형식을 만든다 — 누울 수밖에 없었기에 천장을 봤고, 자신을 봤다.',
                 condition: '주체와 객체가 뒤바뀌는 순간' },
      humor:   { icon: '😄', text: '의사가 전시 참석을 금지했다 — 그녀는 침대째 전시장으로 들어왔다.',
                 condition: '기대와 전혀 다른 방식으로 일이 풀릴 때' },
      emotion: { icon: '❤️', text: '"나를 그린다" — 55점의 자화상이 담긴 것은 얼굴이 아니라 고통과 의지였다.',
                 condition: '오래 버텨온 것 자체가 감동이 되는 이야기' }
    },
    source: {
      type: '실화',
      credit: '프리다 칼로(Frida Kahlo, 1907–1954) / Hayden Herrera 《Frida: A Biography of Frida Kahlo》(1983, Harper & Row)를 바탕으로 재서술했습니다.',
    },
    curatorNote: '어머니가 천장에 거울을 달아줬다는 것이 오래 남습니다. 딸이 무언가를 할 수 있도록 만든 어머니. 칼로는 그 거울을 통해 자신을 봤고, 그것이 55점이 됐습니다.',
    qna: {
      question: '당신의 한계가 오히려 방향을 만든 적이 있나요? 할 수 없었기 때문에 오히려 하게 된 것.',
      answer: '칼로는 일어날 수 없었기 때문에 천장을 봤고, 자신을 봤습니다. 제약이 없었다면 그 방향은 없었을 것입니다. 우리가 불가능하다고 느끼는 조건이 때로 가장 새로운 형식을 만들어냅니다.'
    },
    publishedDate: '2026년 3월 25일',
  },

  /* ═══ 목요일 — 역사·통찰 (PRIMARY: 통찰) ═══ */
  4: {
    title: '레오나르도 다빈치의 할 일 목록',
    category: '역사·통찰',
    primaryType: '통찰',
    types: ['통찰', '유머'],
    image: null,
    svgKey: null,
    body: [
      '레오나르도 다빈치는 7,000페이지가 넘는 노트를 남겼다. 해부도, 비행기 설계도, 물의 흐름, 인체 비율, 지도. 르네상스의 모든 지식이 그 안에 있다.',
      '그 중에 할 일 목록이 있다.',
      '"수학자 선생님에게 삼각형을 정사각형으로 만드는 방법을 배울 것."',
      '"밀라노의 수로 전문가에게 수문, 운하, 수차를 수리하는 법을 물어볼 것."',
      '"의학 그림에 대해 조반니에게 물어볼 것."',
      '"솔방울을 구할 것."',
      '"산술 책을 찾아볼 것."',
      '다빈치는 당대 모든 분야를 섭렵한 천재였다. 그러나 그도 여전히 배워야 할 것이 있었고, 찾아봐야 할 것이 있었고, 물어봐야 할 사람이 있었다.',
      '그는 목록을 썼다. 그리고 아마도 미루기도 했다. 그는 미완성 작품으로도 유명하다. 《최후의 만찬》을 완성하는 데 3년이 걸렸고, 발주자가 끊임없이 재촉했다. 《모나리자》는 죽을 때까지 옆에 두고 손을 댔다.',
      '그는 평생 호기심이 많았고, 평생 배움이 부족하다고 느꼈다. 그 불완전함이 7,000페이지를 만들었다.'
    ],
    closing: '"솔방울을 구할 것."\n천재의 메모도 이런 문장으로 가득했다.\n그 불완전함이 7,000페이지를 만들었다.',
    analysis: {
      insight: { icon: '💡', text: '천재도 할 일 목록을 쓴다 — 호기심이 많다는 것은 부족하다는 것을 계속 인식한다는 뜻이다.',
                 condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
      humor:   { icon: '😄', text: '"솔방울을 구할 것" — 7,000페이지 르네상스 노트에 솔방울 메모가 있다.',
                 condition: '진지하게 믿고 있지만 밖에서 보면 황당한 것' },
      emotion: { icon: '❤️', text: '죽을 때까지 모나리자 옆에 두고 손을 댔다 — 완성이 아니라 지속이었다.',
                 condition: '아주 작은 순간이 사실 전부였던 이야기' }
    },
    source: {
      type: '실화',
      credit: '레오나르도 다빈치(Leonardo da Vinci, 1452–1519) / Codex Arundel, Codex Atlanticus 등 다빈치 노트북, Walter Isaacson 《Leonardo da Vinci》(2017, Simon & Schuster)를 바탕으로 재서술했습니다.',
    },
    curatorNote: '할 일 목록에 "수학 배울 것"이 있다는 것. 다빈치도 수학을 배워야 했습니다. 천재는 모든 것을 아는 사람이 아니라, 모르는 것을 계속 추적하는 사람이라는 생각이 들었습니다.',
    qna: {
      question: '오늘 당신의 할 일 목록에 있는 것 중, 오래 미뤄온 것이 있나요? 다빈치도 그것을 목록에 썼을 것입니다.',
      answer: '다빈치의 목록은 그가 완전하지 않았다는 증거입니다. 그리고 그것이 그를 멈추지 않았습니다. 미완성과 미루기는 천재의 조건이 아니라 인간의 조건입니다. 중요한 것은 목록을 계속 쓴다는 것입니다.'
    },
    publishedDate: '2026년 3월 26일',
  },

  /* ═══ 금요일 — 철학·유머 (PRIMARY: 유머) ═══ */
  5: {
    title: '소크라테스와 크산티페',
    category: '철학·유머',
    primaryType: '유머',
    types: ['유머', '통찰'],
    image: null,
    svgKey: null,
    body: [
      '소크라테스에게는 악처로 유명한 아내가 있었다. 크산티페. 고대 그리스에서 그 이름은 잔소리하는 여자의 대명사가 됐다.',
      '어느 날 크산티페가 소크라테스에게 한바탕 잔소리를 퍼부었다. 소크라테스는 아무 말도 하지 않고 집 밖으로 나갔다. 크산티페는 화가 더 났다. 창문에서 물을 끼얹었다.',
      '소크라테스는 물을 맞고 말했다. "천둥 뒤에는 비가 오는 법이지."',
      '누군가 물었다. "왜 크산티페 같은 아내와 사느냐?" 소크라테스가 답했다. "말을 잘 타려는 사람은 가장 거친 말을 고릅니다. 나는 사람을 상대하는 법을 익히고 싶어서 크산티페를 고른 것입니다. 그녀를 견딜 수 있다면 누구든 견딜 수 있습니다."',
      '이것이 사실인지 확인하기 어렵다. 소크라테스는 글을 남기지 않았다. 우리가 아는 소크라테스는 플라톤이 쓴 소크라테스다.',
      '그러나 플라톤의 《파이돈》에서 소크라테스가 죽던 날의 기록은 남아 있다. 크산티페는 어린아이를 안고 감옥에 왔다. 소크라테스를 보자마자 울었다. "이것이 당신과 친구들이 함께하는 마지막 날이에요." 소크라테스는 친구 크리톤에게 그녀를 데려가 달라고 부탁했다.',
      '악처의 이야기인 줄 알았는데, 그날 가장 먼저 울었던 것은 크산티페였다.',
      '소크라테스는 독배를 마시기 전까지 친구들과 영혼 불멸에 대해 이야기했다. 크리톤이 물었다. "어떻게 묻어야 합니까?" 소크라테스는 웃으며 말했다. "그것이 나를 묻는 것이 아니라는 것만 기억한다면, 원하는 대로."'
    ],
    closing: '악처와의 삶이 철학자를 만들었다고 했다.\n그러나 그가 죽던 날\n가장 먼저 울었던 것은 그 악처였다.',
    analysis: {
      insight: { icon: '💡', text: '전해지는 이야기와 실제 기록 사이 — 크산티페는 악처가 아니라 먼저 슬퍼한 아내였을 수 있다.',
                 condition: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기' },
      humor:   { icon: '😄', text: '"천둥 뒤에는 비가 오는 법" — 물벼락을 맞고 남긴 말.',
                 condition: '위엄 없는 순간이 오히려 가장 인간적이었을 때' },
      emotion: { icon: '❤️', text: '죽기 전날 아이를 안고 찾아와 울었다 — 가장 먼저 슬퍼한 사람.',
                 condition: '말하지 못했던 것이 침묵 속에서 말해질 때' }
    },
    source: {
      type: '실화',
      credit: '소크라테스(Socrates, 470–399 BC) / 플라톤 《파이돈》(Phaedo) 기록, 크세노폰 《향연》(Symposium) 기록을 바탕으로 재서술했습니다.',
    },
    curatorNote: '악처 이야기인 줄 알고 읽다가, 죽던 날 가장 먼저 운 사람이 크산티페였다는 것에서 멈췄습니다. 전해지는 이야기가 때로 실제를 가립니다.',
    qna: {
      question: '당신이 오랫동안 오해했거나 한 면만 봤던 사람이 있나요? 다른 면을 보게 된 순간이 있었나요?',
      answer: '크산티페는 2,400년간 악처의 대명사였습니다. 그러나 《파이돈》의 그 장면을 보면 다른 사람이 보입니다. 우리가 아는 사람에 대한 이야기는 항상 전부가 아닙니다.'
    },
    publishedDate: '2026년 3월 27일',
  },

  /* ═══ 토요일 — 에세이·일상 (PRIMARY: 감동) ═══ */
  6: {
    title: '발',
    category: '에세이·일상',
    primaryType: '감동',
    types: ['감동', '통찰'],
    image: 'images/발.webp',
    svgKey: null,
    body: [
      '사랑스러운 발이다.',
      '광주의 펭귄마을에 구경 갔는데, 길거리 바닥에 거울 하나가 눈에 들어왔다. 우연히 거울 앞에 멈춰 섰더니, 온 가족의 발들이 거울에 반사되었다. 나중에 다시 사진을 열어보니, 발들이 참 정겹게 다가왔다.',
      '막내 발은 아직 새로운 땅을 만나기 부끄러운 듯이 한 쪽이 젖혀져 있고, 둘째 발은 당당하게 벌린 것이 왠지 자신감이 느껴진다. 첫째 발의 운동화에서는 청소년의 멋스러움이 깃들어 있고, 아내 발은 아들 셋 키우느라 예전보다 더 야무지게 변한 것 같다.',
      '많은 사람들은 아기가 태어나면 발 사진을 찍는다. 아마 얼마나 작고 예쁜 발이었는지 기억하면서 동시에 그 여림을 딛고 일어서서 앞으로 크고 멋진 발을 가진 사람으로 자라길 바라는 마음이겠다.',
      '발은 정말 삶 전체를 통해 이런 변화의 과정을 거친다. 아무것도 할 수 없는 귀여운 발에 근육이 생기면서 드디어 일어선다. 그러다 걷게 되고 뛰기도 하면서 조금씩 자란다. 축구를 하고 춤도 추고 발차기도 하면서 발은 점점 강해진다.',
      '어른이 되면 발은 성장을 멈추고 그 기능도 변한다. 지금까지는 스스로를 세우는 발이었다면, 이제부터는 가족들을 떠받치는 발이 된다. 아이를 안기도 하며 업고 다니기도 하고, 발로 아이를 들어 비행기도 태워준다. 또 생계를 위해 먼 거리를 마다 않고 걸어 다니고, 무거운 짐을 들고서도 거뜬히 버텨낸다. 심지어 여성들은 불편한 하이힐을 신고서도 직장 일을 하며 장도 본다.',
      '참 고마운 발이 아닐 수 없다.',
      '노인이 되면 발은 그동안 혹사당한 티를 내기 시작한다. 걸음이 느려지고 몸은 무거워진다. 혹시 무릎이나 허벅지의 관절까지 나빠지기라도 하면 펭귄처럼 뒤뚱뒤뚱 걷게 된다. 이제 발도 좀 쉴 때가 온 거고, 마침내 아기 발처럼 다시 여린 상태로 되돌아가면 이제는 머나먼 여행을 채비할 때가 된 것이다.',
      '정말 힘든 여행은 머리에서 가슴으로 그리고 가슴에서 발로 내려가는 것이라고 신영복 교수는 말했다. 아무리 머리에 지식이 가득해도 그것을 가슴으로 다른 사람들과 공감하며 사는 게 어렵고, 더 나아가 발로 대표되는 현장과 실천의 삶을 살아내기가 그렇게 힘들다는 이야기였다.',
      '실제로 나의 발을 통해 내가 어디로 향하고 있었는지, 어디를 그렇게 많이 오갔는지, 누구를 만나고 다녔는지 그리고 무엇을 떠받들고 있었는지를 살펴본다면, 거기에 내 삶이 고스란히 담겨있겠다 싶다. 아무리 많은 지식과 경험도 결국에는 발로 수렴되고, 다른 사람과 어울리고 서로 섬기는 인격과 사랑도 마지막에는 발을 통해 드러나게 된다.',
      '그렇다면 발을 사진 찍는 이유가 어린 시절 발에 대한 추억보다 삶의 흔적이 발을 통해 새겨진다는 것을 기억하길 바란 게 아닐까?',
      '발은 그야말로 우리의 삶을 말해주고 있다.'
    ],
    closing: '머리에서 가슴으로, 가슴에서 발로.\n가장 힘든 여행은 그 방향이다.\n발은 우리의 삶을 말해주고 있다.',
    analysis: {
      insight: { icon: '💡', text: '발은 삶의 궤적이다 — 어디로 향했는지, 무엇을 떠받쳤는지가 발에 새겨진다.',
                 condition: '작은 것이 사실 전부였던 이야기' },
      humor:   { icon: '😄', text: '펭귄마을의 거울에 비친 온 가족의 발 — 각자 다른 성격이 발에 그대로 담겨 있다.',
                 condition: '거대한 것이 작게, 작은 것이 거대하게 다뤄질 때' },
      emotion: { icon: '❤️', text: '아기 발 사진을 찍는 이유 — 그 여림을 기억하며 크고 멋진 발로 자라길 바라는 마음.',
                 condition: '아주 작은 순간이 사실 전부였던 이야기' }
    },
    source: {
      type: '에세이',
      credit: 'SCJ / blog.naver.com/scjoe',
      url: 'https://blog.naver.com/scjoe/221551121353'
    },
    curatorNote: '"정말 힘든 여행은 머리에서 가슴으로, 그리고 가슴에서 발로 내려가는 것이다." 신영복 교수의 말이 이 글에서 오래 남습니다. 발을 보면 그 사람의 삶이 보인다는 것.',
    qna: {
      question: '당신의 발은 지금 어디를 향하고 있나요? 그리고 무엇을 오랫동안 떠받쳐 왔나요?',
      answer: '발을 들여다보는 것은 삶을 들여다보는 것입니다. 어디를 많이 오갔는지, 무엇을 위해 오래 서 있었는지. 그 흔적이 발에 고스란히 남아 있습니다.'
    },
    publishedDate: '2026년 3월 28일'
  }
    }
  }
];

/* ──────────────────────────────────────────────────────────
   SOURCES  ·  50개 소스 탐색 풀
   type: website | youtube | podcast | newsletter | reddit
   cats: 이 소스에서 잘 찾아지는 IHE 카테고리 (최대 2)
   days: 관련 요일 (1=월 … 5=금)
   ────────────────────────────────────────────────────────── */
const SOURCES = [

  /* ── 월요일 ── 사랑 ── */
  { id:'s01', name:'Humans of New York',       url:'https://www.humansofnewyork.com',
    type:'website',    cats:['감동','통찰'],  days:[1],
    desc:'뉴욕 시민들의 일상 이야기. 누구나 담고 있는 감동의 원석. 사랑·상실·용기가 교차한다.' },
  { id:'s02', name:'NYT Modern Love',           url:'https://www.nytimes.com/column/modern-love',
    type:'website',    cats:['감동','통찰'],  days:[1],
    desc:'독자 투고 기반의 현대인 사랑 이야기. 예상을 벗어나는 반전과 감동이 가득하다.' },
  { id:'s03', name:'StoryCorps',                url:'https://storycorps.org',
    type:'podcast',    cats:['감동'],         days:[1,2],
    desc:'평범한 미국인들이 서로에게 들려주는 짧은 인생 이야기. 인류의 보편 감동 창고.' },
  { id:'s04', name:'The Moth',                  url:'https://themoth.org',
    type:'podcast',    cats:['감동','유머'],  days:[1,2,3],
    desc:'무대 위에서 직접 들려주는 개인 이야기. 감동과 유머가 교차하는 최고의 스토리텔링.' },
  { id:'s05', name:'SoulPancake',               url:'https://www.youtube.com/@SoulPancake',
    type:'youtube',    cats:['감동'],         days:[1],
    desc:'인간의 선함과 연결에 관한 짧은 영상들. "사랑"과 "친절"이 실제로 작동하는 모습.' },
  { id:'s06', name:'On Being (Krista Tippett)', url:'https://onbeing.org',
    type:'podcast',    cats:['통찰','감동'],  days:[1,3],
    desc:'사랑·삶·의미에 관한 심층 인터뷰. 통찰과 감동이 모두 깊고 오래 남는다.' },
  { id:'s07', name:'Poetry Foundation',         url:'https://www.poetryfoundation.org/poems/browse#topic=love',
    type:'website',    cats:['감동'],         days:[1,2],
    desc:'고전과 현대 사랑시 아카이브. 언어로 담은 감정의 가장 정제된 형태.' },
  { id:'s08', name:'Aeon — Love & Relationships', url:'https://aeon.co/topics/love',
    type:'website',    cats:['통찰','감동'],  days:[1,3],
    desc:'철학·심리학적 관점의 사랑 탐구. 사랑이 왜, 어떻게 작동하는지 깊이 파고든다.' },
  { id:'s09', name:'r/wholesomestories',        url:'https://www.reddit.com/r/wholesomestories/',
    type:'reddit',     cats:['감동'],         days:[1],
    desc:'Reddit의 따뜻한 이야기 모음. 작은 친절과 예상 밖 감동이 넘친다.' },
  { id:'s10', name:'The Marginalian',           url:'https://www.themarginalian.org',
    type:'website',    cats:['통찰','감동'],  days:[1,2,3],
    desc:'마리아 포포바의 문학·과학·철학 큐레이션. 사랑과 삶에 관한 깊고 아름다운 에세이.' },

  /* ── 화요일 ── 역사·문학 ── */
  { id:'s11', name:'Literary Hub',              url:'https://lithub.com',
    type:'website',    cats:['통찰','감동'],  days:[2],
    desc:'세계 문학 에세이와 단편. 작가들의 창작 이야기와 문학적 통찰의 보고.' },
  { id:'s12', name:"Lapham's Quarterly",        url:'https://www.laphamsquarterly.org',
    type:'website',    cats:['통찰','감동'],  days:[2],
    desc:'역사 원문과 현대 에세이의 독창적 병치. "역사가 지금을 어떻게 설명하는가".' },
  { id:'s13', name:'Letters of Note',           url:'https://lettersofnote.com',
    type:'website',    cats:['감동','통찰'],  days:[2],
    desc:'역사 속 인물들의 실제 편지 모음. 거장들의 인간적 면모와 예상 밖 감동.' },
  { id:'s14', name:"Dan Carlin's Hardcore History", url:'https://www.dancarlin.com/hardcore-history-series/',
    type:'podcast',    cats:['통찰','감동'],  days:[2,4],
    desc:'방대하지만 스토리텔링이 탁월한 역사 팟캐스트. 역사의 드라마가 살아있다.' },
  { id:'s15', name:'JSTOR Daily',               url:'https://daily.jstor.org',
    type:'website',    cats:['통찰'],         days:[2,4],
    desc:'학술 연구를 일반인 눈높이로 풀어쓴 역사·문화 이야기. 무료 접근 가능.' },
  { id:'s16', name:'The Paris Review',          url:'https://www.theparisreview.org',
    type:'website',    cats:['통찰','감동'],  days:[2],
    desc:'세계 최고 작가들의 인터뷰와 단편소설. 문학의 정수를 담은 아카이브.' },
  { id:'s17', name:'Crash Course History',      url:'https://www.youtube.com/@crashcourse',
    type:'youtube',    cats:['통찰','유머'],  days:[2],
    desc:'역사를 유머와 속도감 있게 전달하는 채널. 10분 안에 핵심 통찰 획득.' },
  { id:'s18', name:'r/AskHistorians',           url:'https://www.reddit.com/r/AskHistorians/',
    type:'reddit',     cats:['통찰'],         days:[2],
    desc:'역사학자들이 직접 답변하는 Reddit 커뮤니티. 깊고 신뢰할 수 있는 역사 해설.' },
  { id:'s19', name:'History Today',             url:'https://www.historytoday.com',
    type:'website',    cats:['통찰'],         days:[2],
    desc:'역사 속 숨겨진 이야기들. 학술적이지만 읽기 쉬운 형식으로 제공.' },
  { id:'s20', name:'Overheard at Nat Geo',      url:'https://www.nationalgeographic.com/podcasts/overheard/',
    type:'podcast',    cats:['통찰','감동'],  days:[2,4],
    desc:'내셔널 지오그래픽 탐험가들의 비하인드 스토리. 역사·과학·문화의 생생한 교차점.' },

  /* ── 수요일 ── 철학·심리 ── */
  { id:'s21', name:'Philosophize This!',        url:'https://www.philosophizethis.org',
    type:'podcast',    cats:['통찰'],         days:[3],
    desc:'철학사를 스토리텔링으로. 입문부터 심화까지. 통찰의 연속. 무료.' },
  { id:'s22', name:'The School of Life',        url:'https://www.youtube.com/@theschooloflifeofficial',
    type:'youtube',    cats:['통찰','감동'],  days:[3],
    desc:'철학을 삶의 언어로 번역한 채널. 10분 영상 하나에 깊은 통찰이 담긴다.' },
  { id:'s23', name:'Hidden Brain',              url:'https://hiddenbrain.org',
    type:'podcast',    cats:['통찰','감동'],  days:[3],
    desc:'인간 심리의 숨겨진 면. NPR 팟캐스트. 예상 밖 연구 결과와 감동 스토리.' },
  { id:'s24', name:'Greater Good Magazine',     url:'https://greatergood.berkeley.edu',
    type:'website',    cats:['통찰','감동'],  days:[3],
    desc:'버클리 대학의 행복·감사·공감 연구 기반 에세이. 과학과 감동의 교차.' },
  { id:'s25', name:'Farnam Street',             url:'https://fs.blog',
    type:'newsletter', cats:['통찰'],         days:[3,5],
    desc:'정신 모델과 의사결정에 관한 깊은 글. 매주 뉴스레터로도 구독 가능. 통찰의 보고.' },
  { id:'s26', name:'Kurzgesagt',                url:'https://www.youtube.com/@kurzgesagt',
    type:'youtube',    cats:['통찰','감동'],  days:[3,4],
    desc:'과학·철학·심리 주제를 아름다운 애니메이션으로. 짧고 깊고 아름답다.' },
  { id:'s27', name:'Radiolab',                  url:'https://radiolab.org',
    type:'podcast',    cats:['통찰','감동'],  days:[3,4],
    desc:'과학과 철학이 만나는 팟캐스트. 예상치 못한 관점 전환이 탁월. 감동도 깊다.' },
  { id:'s28', name:'r/philosophy',              url:'https://www.reddit.com/r/philosophy/',
    type:'reddit',     cats:['통찰'],         days:[3],
    desc:'철학 토론과 큐레이션. Top Posts에서 핵심 통찰 이야기 발굴 가능.' },
  { id:'s29', name:'Big Think',                 url:'https://www.youtube.com/@bigthink',
    type:'youtube',    cats:['통찰'],         days:[3,4],
    desc:'세계 석학들의 짧은 강연 영상. 한 번에 하나의 통찰. 무료.' },
  { id:'s30', name:'Psychology Today',          url:'https://www.psychologytoday.com',
    type:'website',    cats:['통찰','유머'],  days:[3],
    desc:'심리학 연구를 실생활에 연결한 짧고 실용적인 글. 인간 심리의 의외성.' },

  /* ── 목요일 ── 과학·문화 ── */
  { id:'s31', name:'Quanta Magazine',           url:'https://www.quantamagazine.org',
    type:'website',    cats:['통찰'],         days:[4],
    desc:'최첨단 수학·과학 연구를 아름다운 스토리텔링으로. 무료, 광고 없음. 강력 추천.' },
  { id:'s32', name:'Veritasium',                url:'https://www.youtube.com/@veritasium',
    type:'youtube',    cats:['통찰','유머'],  days:[4],
    desc:'반직관적 과학 실험과 유머로 통찰을 전달하는 채널. 고퀄리티.' },
  { id:'s33', name:'99% Invisible',             url:'https://99percentinvisible.org',
    type:'podcast',    cats:['통찰','감동'],  days:[4],
    desc:'우리 주변 사물과 디자인의 숨겨진 이야기. 문화와 과학의 교차점에서 통찰 발굴.' },
  { id:'s34', name:'Atlas Obscura',             url:'https://www.atlasobscura.com',
    type:'website',    cats:['통찰','감동'],  days:[4],
    desc:'세계의 이상하고 놀라운 장소와 현상. 문화와 과학의 경계에서 의외의 이야기.' },
  { id:'s35', name:'Smarter Every Day',         url:'https://www.youtube.com/@SmarterEveryDay',
    type:'youtube',    cats:['통찰'],         days:[4],
    desc:'Destin Sandlin의 과학 탐구 채널. 일상 현상의 원리를 깊이 파고드는 접근.' },
  { id:'s36', name:'Nautilus',                  url:'https://nautil.us',
    type:'website',    cats:['통찰','감동'],  days:[4],
    desc:'과학과 인문학의 교차점. 깊은 통찰이 담긴 과학 에세이. 읽는 재미가 있다.' },
  { id:'s37', name:'r/todayilearned',           url:'https://www.reddit.com/r/todayilearned/',
    type:'reddit',     cats:['통찰','유머'],  days:[4],
    desc:'매일 새로운 반직관적 사실들. "아무도 몰랐던 것"의 보고. 통찰+유머의 원석.' },
  { id:'s38', name:'Science Friday',            url:'https://www.sciencefriday.com',
    type:'podcast',    cats:['통찰'],         days:[4],
    desc:'과학 뉴스와 심층 탐구. 전문적이지만 친근한 형식. 과학과 사회의 교점.' },
  { id:'s39', name:'Smithsonian Magazine',      url:'https://www.smithsonianmag.com',
    type:'website',    cats:['통찰','감동'],  days:[4],
    desc:'과학·역사·문화를 넘나드는 잡지. 풍부한 시각자료와 흥미로운 이야기.' },
  { id:'s40', name:'The Conversation',          url:'https://theconversation.com',
    type:'website',    cats:['통찰'],         days:[4,5],
    desc:'전 세계 학자들이 직접 쓴 시사 해설. 전문적이지만 접근하기 쉬운 형식.' },

  /* ── 금요일 ── 경제·정치 ── */
  { id:'s41', name:'Planet Money',              url:'https://www.npr.org/podcasts/510289/planet-money',
    type:'podcast',    cats:['유머','통찰'],  days:[5],
    desc:'NPR의 경제 팟캐스트. 복잡한 경제를 유머와 스토리텔링으로. 최고의 통찰+유머 조합.' },
  { id:'s42', name:'Freakonomics',              url:'https://freakonomics.com',
    type:'podcast',    cats:['통찰','유머'],  days:[5],
    desc:'경제학으로 세상의 숨겨진 진실 파헤치기. 유머와 통찰의 완벽한 조합. 강력 추천.' },
  { id:'s43', name:'Morning Brew',              url:'https://www.morningbrew.com',
    type:'newsletter', cats:['유머','통찰'],  days:[5],
    desc:'유머러스한 톤으로 전달하는 경제·비즈니스 뉴스레터. 딱딱한 경제를 재미있게.' },
  { id:'s44', name:'Not Just Bikes',            url:'https://www.youtube.com/@notjustbikes',
    type:'youtube',    cats:['통찰','감동'],  days:[5],
    desc:'도시 계획·정치·문화의 교차. "왜 우리 도시는 이렇게 됐을까?" 의외의 통찰.' },
  { id:'s45', name:'Marginal Revolution',       url:'https://marginalrevolution.com',
    type:'website',    cats:['통찰','유머'],  days:[5],
    desc:'경제학자 Tyler Cowen의 블로그. 일상의 경제학적 관점. 유머와 통찰이 가득.' },
  { id:'s46', name:'The Indicator (Planet Money)', url:'https://www.npr.org/podcasts/510325/the-indicator-from-planet-money',
    type:'podcast',    cats:['통찰','유머'],  days:[5],
    desc:'Planet Money의 짧은 버전. 10분 안에 경제의 한 단면을 깊이 파고드는 팟캐스트.' },
  { id:'s47', name:'r/Economics',               url:'https://www.reddit.com/r/economics/',
    type:'reddit',     cats:['통찰'],         days:[5],
    desc:'경제학 연구와 시사 분석. Top Posts에서 반직관적 경제 통찰 발굴 가능.' },
  { id:'s48', name:'Project Syndicate',         url:'https://www.project-syndicate.org',
    type:'website',    cats:['통찰'],         days:[5],
    desc:'세계 석학들의 경제·정치 분석. 노벨상 수상자들도 기고하는 신뢰할 수 있는 플랫폼.' },
  { id:'s49', name:'Odd Lots (Bloomberg)',       url:'https://www.bloomberg.com/oddlots',
    type:'podcast',    cats:['통찰'],         days:[5],
    desc:'Bloomberg의 독특한 경제 관점. 비주류 경제학자들의 의외의 분석. 통찰의 보고.' },
  { id:'s50', name:'Foreign Affairs',           url:'https://www.foreignaffairs.com',
    type:'website',    cats:['통찰'],         days:[5],
    desc:'국제 정치와 외교 정책의 심층 분석. 무게감 있는 시각. 무료 기사 제공.' },

  /* ── SCJ 블로그 (6개월에 1회, 모든 요일) ── */
  { id:'scj', name:'SCJ 블로그',               url:'https://blog.naver.com/scjoe',
    type:'website',    cats:['통찰','유머','감동'], days:[1,2,3,4,5],
    freq:'semi-annual',
    desc:'큐레이터 SCJ의 개인 블로그. 요일별 주제에 맞는 글을 6개월에 1편 기준으로 선택. 출처: SCJ의 블로그.' }
];

/* ──────────────────────────────────────────────────────────
   IHE CONDITIONS  ·  큐레이터가 관찰한 조건 태깅용 마스터 목록
   2개월간 어떤 조건에서 좋은 이야기가 나오는지 추적
   ────────────────────────────────────────────────────────── */
const IHE_CONDITIONS = {
  '통찰': [
    '오랫동안 당연했던 것이 사실이 아닐 때',
    '반대 입장에서 보면 오히려 더 맞는 이야기일 때',
    '오류나 실패가 더 깊은 이해의 문을 열어줄 때',
    '완전히 다른 두 분야에서 같은 구조가 보이는 이야기',
    '아무도 아직 이름 붙이지 않은 것에 이름을 붙일 때',
    '보이지 않는 것 속에 진짜가 있을 때',
    '아주 작은 것이 사실 전부를 담고 있을 때',
    '주체와 객체가 뒤바뀌는 순간'
  ],
  '유머': [
    '기대를 만들었다가 완전히 다른 방향으로 어긋날 때',
    '진지하게 믿고 있지만 밖에서 보면 황당한 것',
    '거대한 것이 작게, 또는 작은 것이 거대하게 다뤄질 때',
    '위엄 없는 순간이 오히려 가장 인간적이었을 때',
    '해결책이 오히려 문제를 만들어낸 경우',
    '가장 하찮아 보이는 것이 가장 중요한 것이었을 때'
  ],
  '감동': [
    '말하지 못했던 것이 침묵 속에서 말해질 때',
    '취약함을 숨기지 않고 마주하는 순간',
    '아무도 보지 않을 때도 멈춰서 행동한 사람',
    '아주 구체적이지만 사실 모두의 이야기인 것',
    '아주 작은 순간이 사실 전부였던 이야기',
    '기대하지 않았던 곳에서 연결이 생길 때'
  ]
};

/* ──────────────────────────────────────────────────────────
   SEARCH GUIDE
   이야기를 찾기 전에 묻는 질문들 — 카테고리별 탐색 렌즈
   각 질문은 통찰/유머/감동이 생기는 '조건'에서 도출
   ────────────────────────────────────────────────────────── */
const SEARCH_GUIDE = {

  '통찰': {
    intro: '이 사이트에서 이런 이야기를 찾아보세요',
    questions: [
      {
        q: '아무도 아직 이름 붙이지 않은 것을 다루는 이야기',
        hint: '당연한 것에 처음으로 "왜?"를 물었을 때 보이는 것 — 체호프의 법칙이 삶의 법칙이 된 것처럼'
      },
      {
        q: '완전히 다른 두 분야에서 같은 구조가 보이는 이야기',
        hint: '과학의 발견이 철학적 통찰이 되거나, 문학의 법칙이 경제를 설명할 때'
      },
      {
        q: '실패나 오류가 나중에 더 깊은 이해를 열어준 이야기',
        hint: '버리기 직전이 발견의 순간이 된 경우 — 페니실린처럼'
      },
      {
        q: '반대 입장에서 보면 오히려 맞는 이야기',
        hint: '관점을 180도 돌렸을 때 전혀 다른 진실이 보이는 것 — 깨진 유리창의 논리처럼'
      },
      {
        q: '오랫동안 당연했던 것이 사실이 아닌 이야기',
        hint: '상식이 조용히 뒤집히는 순간 — 자기인식 테스트처럼'
      }
    ]
  },

  '유머': {
    intro: '이 사이트에서 이런 이야기를 찾아보세요',
    questions: [
      {
        q: '진지하게 믿고 있지만 밖에서 보면 황당한 이야기',
        hint: '내부에서는 심각하지만 외부의 눈으로 보면 웃긴 것 — 황당한 경제 논리처럼'
      },
      {
        q: '기대를 만들었다가 전혀 다른 방향으로 어긋나는 이야기',
        hint: '웃으려다 웃을 수 없게 되는 반전 — 헤밍웨이 내기처럼'
      },
      {
        q: '해결책이 오히려 문제를 만들어낸 경우',
        hint: '자기 논리가 스스로를 무너뜨리는 것 — 선의가 반대 결과를 낳을 때'
      },
      {
        q: '거대한 것이 작게, 또는 작은 것이 거대하게 다뤄지는 이야기',
        hint: '스케일이 뒤집힐 때 생기는 웃음 — 침팬지가 인간보다 자기인식을 잘하는 것처럼'
      },
      {
        q: '위엄 있어 보이지만 사실 굉장히 인간적인 이야기',
        hint: '권위가 무너지는 순간의 솔직함 — 커피값 못 낸 사람이 나중에 배우자가 된 것처럼'
      }
    ]
  },

  '감동': {
    intro: '이 사이트에서 이런 이야기를 찾아보세요',
    questions: [
      {
        q: '아주 구체적이지만 사실 모두의 이야기인 것',
        hint: '한 사람의 특별한 이야기 속에서 나 자신을 발견하는 순간 — 영수증 한 장처럼'
      },
      {
        q: '아무도 보지 않을 때도 그것을 한 사람의 이야기',
        hint: '관객 없는 헌신이 드러나는 순간 — 플레밍이 "왜?"를 물은 것처럼'
      },
      {
        q: '취약함이 숨겨지지 않고 품위 있게 다뤄지는 순간',
        hint: '약함을 인정하는 것이 오히려 강함이 되는 것 — 거울 앞에 서는 용기처럼'
      },
      {
        q: '말하지 못했던 것이 이야기 속에서 말해지는 순간',
        hint: '침묵이 말보다 더 많이 말하는 경우 — 헤밍웨이의 여섯 단어처럼'
      },
      {
        q: '아주 작은 순간이 사실 전부였던 이야기',
        hint: '커피 한 잔의 기억이 결혼의 이유가 되는 것처럼 — 디테일이 의미의 전부일 때'
      }
    ]
  }
};

/* ──────────────────────────────────────────────────────────
   MONTHLY_OBJECTS
   매월 하나씩 바뀌는 "그리운 오브제" — 하단 띠 이미지 + 이야기 소재 참조
   각 항목: { name, desc, ihe, svgId, storyHints[] }
   ────────────────────────────────────────────────────────── */
const MONTHLY_OBJECTS = [
  /* 1월 */ {
    name: '손으로 감는 필름 카메라',
    desc: '셔터를 누르기 전 한 번 더 생각하게 만들던 물건',
    ihe: '통찰',
    storyHints: [
      '36컷이 전부였던 시절, 무엇을 남길지 고르는 일의 의미',
      '현상소에서 사진을 받아오던 두근거림 — 기다림이 감정을 키우던 방식',
      '흔들린 사진 한 장이 완벽한 사진보다 더 오래 기억되는 이유'
    ]
  },
  /* 2월 */ {
    name: '연탄 집게와 연탄',
    desc: '새벽에 연탄을 갈아주던 사람의 손끝에 담긴 온기',
    ihe: '감동',
    storyHints: [
      '새벽 4시에 일어나 연탄을 갈아주던 부모의 이야기',
      '연탄 구멍 19개 — 구멍이 뚫려 있어야 불이 붙는다는 것',
      '몸을 써서만 전달할 수 있었던 사랑의 형식들'
    ]
  },
  /* 3월 */ {
    name: '교실 칠판 분필과 지우개',
    desc: '틀리면 지우고 다시 쓸 수 있었던, 가장 관대한 매체',
    ihe: '유머',
    storyHints: [
      '선생님 흉내를 내다 들켰을 때의 그 정적',
      '칠판 앞에 나가는 것이 왜 그렇게 두려웠는지',
      '분필 가루 속에서 가장 오래 기억되는 수업 한 장면'
    ]
  },
  /* 4월 */ {
    name: '빨간 공중전화 박스',
    desc: '동전 하나로 세상과 연결되던 작은 유리 방',
    ihe: '감동',
    storyHints: [
      '동전이 다 떨어지기 전에 하고 싶었던 말',
      '기다리는 사람과 전화하는 사람, 그 거리의 온도',
      '연결되지 않는 신호음을 듣던 것이 지금의 "읽음" 표시와 같은 감정인가'
    ]
  },
  /* 5월 */ {
    name: '운동회 달리기 결승선 테이프',
    desc: '1등이 아니어도 끊고 싶었던 하얀 실 한 가닥',
    ihe: '유머',
    storyHints: [
      '계주에서 바통을 놓친 아이와 다시 줍는 아이',
      '꼴찌로 들어왔는데 박수가 가장 크게 나왔던 이유',
      '이기기 위해서가 아니라 달리기 위해 뛴 사람들'
    ]
  },
  /* 6월 */ {
    name: '모기향 코일',
    desc: '여름 저녁 마루 끝에서 피어오르던 연기와 향',
    ihe: '감동',
    storyHints: [
      '모기장 안에서 가족이 함께 누워 이야기를 나누던 밤',
      '더위보다 그 냄새가 먼저 떠오르는 여름의 기억',
      '불편함이 오히려 가까움을 만들었던 공간들'
    ]
  },
  /* 7월 */ {
    name: '팥빙수 기계',
    desc: '얼음을 갈아 만들던 소리, 그 여름의 사운드트랙',
    ihe: '유머',
    storyHints: [
      '빙수 한 그릇에 팥 더 달라고 싸웠던 형제자매의 이야기',
      '소복하게 쌓인 얼음이 무너지는 순간의 허무와 기쁨',
      '지금 빙수는 왜 그때보다 비싸고 왜 그때보다 맛이 없는가'
    ]
  },
  /* 8월 */ {
    name: '삐삐(무선호출기)',
    desc: '숫자로만 마음을 전했던, 암호 같은 사랑의 언어',
    ihe: '통찰',
    storyHints: [
      '"0821(빨리와)" "1004(천사)" — 숫자가 언어가 된 시절',
      '응답 없는 숫자를 반복해서 보내던 밤의 감정',
      '즉각 연결이 없었을 때 오히려 기다림이 관계를 단단하게 했는가'
    ]
  },
  /* 9월 */ {
    name: '드럼통 군고구마',
    desc: '골목 어귀에서 피어오르던 연기와 달콤한 냄새',
    ihe: '감동',
    storyHints: [
      '빈 주머니를 탈탈 털어 고구마 하나를 사줬던 사람',
      '식어도 맛있었던 이유 — 온기를 나눠 가진 것이기 때문에',
      '사라진 것들이 남긴 냄새에 대하여'
    ]
  },
  /* 10월 */ {
    name: '다이얼 라디오',
    desc: '잡음 사이에서 좋아하는 노래를 찾아내던 집중의 시간',
    ihe: '통찰',
    storyHints: [
      '주파수를 맞추는 것이 대화와 닮아 있다는 것',
      '노이즈 속에서만 들리는 신호들 — 완벽한 수신의 역설',
      '밤 11시 라디오 DJ가 모르는 청취자에게 보내던 위로의 형식'
    ]
  },
  /* 11월 */ {
    name: '브라운관 TV (토끼귀 안테나)',
    desc: '온 가족이 같은 걸 보던 시절, 채널은 하나였지만 이야기는 더 많았다',
    ihe: '감동',
    storyHints: [
      '명절에 온 가족이 둘러앉아 같은 화면을 보던 것의 의미',
      '채널이 세 개뿐일 때 더 많이 이야기했던 이유',
      '안테나 방향을 잡아주던 아버지의 뒷모습'
    ]
  },
  /* 12월 */ {
    name: '손 편지와 우표',
    desc: '쓰는 사람의 손 온기가 종이에 남아있던 통신의 시절',
    ihe: '감동',
    storyHints: [
      '보내고 나면 수정할 수 없었던 말들의 무게',
      '우표를 붙이는 것이 마음을 봉인하는 의식이었던 이유',
      '지금도 서랍 어딘가에 남아있을 그 편지의 의미'
    ]
  }
];

/* ──────────────────────────────────────────────────────────
   FILM_SOURCES — 영화·드라마·도서 참조 소스 (AI 프롬프트용)
   카테고리: 'book' | 'web' | 'journal' | 'film' | 'drama'
   ────────────────────────────────────────────────────────── */
const FILM_SOURCES = [
  /* 글·도서 */
  { id: 'src-01', cat: 'book',   ihe: ['통찰','감동'], name: '체호프 단편전집',          url: 'https://www.gutenberg.org/ebooks/author/195',       note: '말하지 않는 것 속에 진실 — 침묵의 통찰' },
  { id: 'src-02', cat: 'book',   ihe: ['통찰','유머'], name: '마크 트웨인 단편',          url: 'https://www.gutenberg.org/ebooks/author/53',        note: '아이러니와 풍자로 빚은 미국적 유머의 원형' },
  { id: 'src-03', cat: 'book',   ihe: ['감동'],        name: '생텍쥐페리 - 어린왕자',     url: 'https://www.gutenberg.org/ebooks/61',               note: '어른이 잊은 것을 아이의 시선으로 되찾는 이야기' },
  { id: 'src-04', cat: 'book',   ihe: ['통찰','감동'], name: 'O. 헨리 단편집',            url: 'https://www.gutenberg.org/ebooks/author/142',       note: '반전이 감동이 되는 순간 — 마지막 잎새의 구조' },
  { id: 'src-05', cat: 'book',   ihe: ['통찰'],        name: '말콤 글래드웰 저작',        url: 'https://www.gladwellbooks.com',                     note: '통계와 일화가 만나 통찰이 되는 논픽션' },
  { id: 'src-06', cat: 'book',   ihe: ['감동','통찰'], name: '빅터 프랭클 - 죽음의 수용소',url: 'https://archive.org/details/manssearchformea00fran', note: '극한에서 발견하는 의미 — 감동과 통찰의 원천' },

  /* 웹·저널 */
  { id: 'src-11', cat: 'web',    ihe: ['통찰','유머'], name: 'Aeon Essays',               url: 'https://aeon.co',                                   note: '철학·과학·문화를 아우르는 깊이 있는 에세이' },
  { id: 'src-12', cat: 'web',    ihe: ['통찰'],        name: 'Farnam Street Blog',         url: 'https://fs.blog',                                   note: '사고방식과 멘탈 모델에 관한 통찰 중심 글' },
  { id: 'src-13', cat: 'web',    ihe: ['유머','통찰'], name: 'The Onion (풍자)',           url: 'https://www.theonion.com',                          note: '현실을 비틀어 진실을 드러내는 풍자 뉴스' },
  { id: 'src-14', cat: 'web',    ihe: ['감동'],        name: 'Humans of New York',         url: 'https://www.humansofnewyork.com',                   note: '평범한 사람의 이야기에서 모두의 이야기를 보는 방식' },
  { id: 'src-15', cat: 'journal',ihe: ['통찰'],        name: 'Harvard Business Review',    url: 'https://hbr.org',                                   note: '경제·조직·리더십의 반전과 통찰' },

  /* 영화 */
  { id: 'src-21', cat: 'film',   ihe: ['통찰','감동'], name: '봉준호 영화 (기생충·마더·살인의 추억)', url: 'https://www.imdb.com/name/nm0094435/',    note: '계급·구조·인간 본성을 날카롭게 포착 — 장면 하나로 전체가 뒤집힘' },
  { id: 'src-22', cat: 'film',   ihe: ['통찰','감동'], name: '이창동 영화 (버닝·시·오아시스)',        url: 'https://www.imdb.com/name/nm0227016/',    note: '언어로 설명 안 되는 것을 필름으로 — 통찰의 영화' },
  { id: 'src-23', cat: 'film',   ihe: ['감동'],        name: '미야자키 하야오 (이웃집 토토로·센과 치히로)', url: 'https://www.ghibli.jp',              note: '상실·성장·사랑의 보편적 감동 — 어른을 위한 어린이 이야기' },
  { id: 'src-24', cat: 'film',   ihe: ['감동','통찰'], name: '시네마 천국 (1988)',                    url: 'https://www.imdb.com/title/tt0095765/',   note: '기억과 시간, 사랑과 이별 — 그리움이 이야기의 전부인 영화' },
  { id: 'src-25', cat: 'film',   ihe: ['유머','통찰'], name: '찰리 채플린 단편 (퍼블릭 도메인)',      url: 'https://www.charliechaplin.com',          note: '몸으로 말하는 보편적 유머 — 웃음 뒤에 오는 날카로움' },
  { id: 'src-26', cat: 'film',   ihe: ['통찰','유머'], name: '홍상수 영화',                           url: 'https://www.imdb.com/name/nm0388215/',    note: '반복과 어긋남 — 일상의 황당함이 철학이 되는 순간' },
  { id: 'src-27', cat: 'film',   ihe: ['감동'],        name: '인생은 아름다워 (1997)',                url: 'https://www.imdb.com/title/tt0118799/',   note: '극한의 상황에서도 아이에게 유머로 세상을 보여준 아버지' },
  { id: 'src-28', cat: 'film',   ihe: ['통찰'],        name: '메멘토 / 인셉션 (놀란)',                url: 'https://www.imdb.com/name/nm0634240/',    note: '기억과 현실의 경계 — 구조 자체가 통찰인 영화' },

  /* 드라마 */
  { id: 'src-31', cat: 'drama',  ihe: ['감동','통찰'], name: '나의 아저씨 (2018)',         url: 'https://www.imdb.com/title/tt7952842/',              note: '말 없는 위로, 존재만으로의 감동 — 인간의 무게를 다루는 방식' },
  { id: 'src-32', cat: 'drama',  ihe: ['감동'],        name: '나의 해방일지 (2022)',       url: 'https://www.imdb.com/title/tt17468750/',             note: '평범한 일상에서 해방의 의미를 묻는 — 조용한 감동' },
  { id: 'src-33', cat: 'drama',  ihe: ['감동','유머'], name: '응답하라 시리즈 (2012-2016)',url: 'https://www.imdb.com/title/tt2361509/',              note: '시대와 기억에 대한 감동 — 그리운 오브제와 직결' },
  { id: 'src-34', cat: 'drama',  ihe: ['통찰'],        name: '미생 (2014)',                url: 'https://www.imdb.com/title/tt4032482/',              note: '바둑판 위 인생의 불완전함 — 조직과 인간에 대한 통찰' },
  { id: 'src-35', cat: 'drama',  ihe: ['유머','감동'], name: '무한도전 명장면',            url: 'https://namu.wiki/w/무한도전',                       note: '한국인의 집단 유머 DNA — 진지함과 황당함의 경계' },
  { id: 'src-36', cat: 'drama',  ihe: ['통찰','감동'], name: 'The Office (미국판)',        url: 'https://www.imdb.com/title/tt0386676/',              note: '일상의 어긋남 — 직장이라는 공간의 유머와 통찰' },
  { id: 'src-37', cat: 'drama',  ihe: ['감동','통찰'], name: 'Breaking Bad',               url: 'https://www.imdb.com/title/tt0903747/',              note: '평범한 인간이 선택의 무게로 변해가는 과정 — 통찰의 드라마' },
  { id: 'src-38', cat: 'drama',  ihe: ['감동'],        name: '이상한 변호사 우영우 (2022)',url: 'https://www.imdb.com/title/tt19850606/',             note: '다름이 통찰이 되는 순간 — 세상을 보는 새로운 렌즈' }
];

/* ── Exploration start date (2025년 1월 6일, 월요일) ── */
const EXPLORE_START = new Date('2025-01-06');
const EXPLORE_WEEKS = 8;
