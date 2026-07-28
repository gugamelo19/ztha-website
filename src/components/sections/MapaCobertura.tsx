"use client";

import { useRef, useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";

const GEO_URL = "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";

const SEDE: [number, number] = [-39.0, -11.5];

const CIDADES: { coords: [number, number]; label: string }[] = [
  { coords: [-38.5, -12.9], label: "Salvador/BA" },
  { coords: [-34.9, -8.1],  label: "Recife/PE" },
  { coords: [-38.5, -3.7],  label: "Fortaleza/CE" },
  { coords: [-35.7, -9.7],  label: "Maceió/AL" },
  { coords: [-37.1, -10.9], label: "Aracaju/SE" },
  { coords: [-44.3, -2.5],  label: "São Luís/MA" },
  { coords: [-42.8, -5.1],  label: "Teresina/PI" },
  { coords: [-36.6, -5.8],  label: "Natal/RN" },
  { coords: [-35.7, -7.1],  label: "João Pessoa/PB" },
  { coords: [-43.9, -19.9], label: "Belo Horizonte/MG" },
  { coords: [-46.6, -23.5], label: "São Paulo/SP" },
  { coords: [-43.2, -22.9], label: "Rio de Janeiro/RJ" },
  { coords: [-49.3, -16.7], label: "Goiânia/GO" },
  { coords: [-47.9, -15.8], label: "Brasília/DF" },
  { coords: [-49.3, -25.4], label: "Curitiba/PR" },
  { coords: [-51.2, -30.0], label: "Porto Alegre/RS" },
  { coords: [-48.5, -27.6], label: "Florianópolis/SC" },
  { coords: [-60.0, -3.1],  label: "Manaus/AM" },
  { coords: [-48.5, -1.5],  label: "Belém/PA" },
  { coords: [-49.3, -10.9], label: "Palmas/TO" },
  { coords: [-55.8, -15.6], label: "Cuiabá/MT" },
  { coords: [-54.6, -20.4], label: "Campo Grande/MS" },
  { coords: [-67.8, -9.97], label: "Rio Branco/AC" },
  { coords: [-63.9, -8.76], label: "Porto Velho/RO" },
  { coords: [-61.0,  2.8],  label: "Boa Vista/RR" },
  { coords: [-51.1,  0.03], label: "Macapá/AP" },
  { coords: [-40.3, -20.3], label: "Vitória/ES" },
];

interface Props {
  scale?: number;
  width?: number;
  height?: number;
}

export default function MapaCobertura({ scale = 820, width = 960, height = 680 }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        obs.disconnect();
        let i = 0;
        const iv = setInterval(() => {
          i++;
          setVisibleCount(i);
          if (i >= CIDADES.length) clearInterval(iv);
        }, 75);
      }
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={wrapRef}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [-56, -16], scale }}
        width={width}
        height={height}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }: any) =>
            geographies.map((geo: any) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#E8F5F1"
                stroke="#4DB89E"
                strokeWidth={0.6}
                style={{
                  default: { outline: "none" },
                  hover:   { fill: "#D4EDE7", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {CIDADES.map((c, i) => (
          <g key={c.label + "-line"} style={{ opacity: i < visibleCount ? 1 : 0, transition: "opacity 0.6s ease" }}>
            <Line
              from={SEDE}
              to={c.coords}
              stroke="#4DB89E"
              strokeWidth={0.5}
              strokeDasharray="3 4"
              strokeOpacity={0.3}
            />
          </g>
        ))}

        {CIDADES.map((c, i) => (
          <g key={c.label + "-marker"} style={{ opacity: i < visibleCount ? 1 : 0, transition: "opacity 0.45s ease" }}>
            <Marker coordinates={c.coords}>
              <circle r={4} fill="#4DB89E" fillOpacity={0.75} stroke="#fff" strokeWidth={1}/>
            </Marker>
          </g>
        ))}

        <Marker coordinates={SEDE}>
          <circle r={12} fill="#4DB89E" fillOpacity={0.12}>
            <animate attributeName="r" values="8;18;8" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="fill-opacity" values="0.12;0;0.12" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          <circle r={6} fill="#4DB89E" stroke="#fff" strokeWidth={2}/>
          <rect x={-52} y={-22} width={100} height={20} rx={4} fill="#fff" stroke="#C8EDE4" strokeWidth={1}/>
          <text x={-2} y={-7} textAnchor="middle" fontSize={10} fontWeight={700} fill="#2B8970" fontFamily="sans-serif">
            Serrinha/BA — Sede
          </text>
        </Marker>
      </ComposableMap>
    </div>
  );
}
