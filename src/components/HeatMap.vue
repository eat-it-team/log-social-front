<template>
  <div id="yandex-map" class="h-full w-full"></div>
</template>

<script lang="ts">
import { defineComponent, markRaw } from 'vue';

export default defineComponent({
  name: "HeatMap",
  components: {
  },
  data () {
    return {
      coords: [
        57.166429,
        52.639751,
      ],
    }
  },
  methods: {
    initializeYandexHeatmap() {
      ymaps.ready(['Heatmap']).then(function init() {
        const map = new ymaps.Map("yandex-map", {
          center: [57.26, 52.639751],
          zoom: 7,
          controls: [
              'zoomControl',
              'fullscreenControl',
            ],
        },
        {
          minZoom: 6,
        });

        let data = [];
        let rx;
        let ry;
        const xMin = 56.2;
        const xMax = 58.2;
        const yMin = 51.8;
        const yMax = 53.9;
        for (let i = 0; i < 200; i++) {
          rx = Math.random() * (xMax - xMin);
          ry = Math.random() * (yMax - yMin);
          data.push([xMin + rx, yMin + ry]);
        }
        let heatmap = new ymaps.Heatmap(data, {
          // Радиус влияния.
          radius: 12,
          // Нужно ли уменьшать пиксельный размер точек при уменьшении зума. False - не нужно.
          dissipating: false,
          // Прозрачность тепловой карты.
          opacity: 0.8,
          // Прозрачность у медианной по весу точки.
          intensityOfMidpoint: 0.2,
          // JSON описание градиента.
          gradient: {
            0.1: 'rgba(128, 255, 0, 0.25)',
            0.2: 'rgba(255, 255, 0, 0.6)',
            0.7: 'rgba(234, 72, 58, 0.7)',
            1.0: 'rgba(162, 36, 25, 0.9)',
          }
        });
        heatmap.setMap(map);
        this.map = markRaw(map)
      });
    },
    loadYandexHeatmap() {
      let scriptYandexHeatmap = document.createElement("script");
      scriptYandexHeatmap.setAttribute(
          "src",
          "https://yastatic.net/s3/mapsapi-jslibs/heatmap/0.0.1/heatmap.min.js"
      );
      scriptYandexHeatmap.async = true;
      document.head.appendChild(scriptYandexHeatmap);

      scriptYandexHeatmap.addEventListener('load', () => {
        this.initializeYandexHeatmap();
      });
    },
  },
  mounted() {
    if (!document.getElementById('yandex-map-script')) {
      let scriptYandexMap = document.createElement("script");
      scriptYandexMap.id = "yandex-map-script";
      scriptYandexMap.setAttribute(
          "src",
          "https://api-maps.yandex.ru/2.1/?apikey=47cdf7a3-d75c-4aed-a277-f2df8844608d&lang=ru_RU"
      );
      scriptYandexMap.async = true;
      document.head.appendChild(scriptYandexMap);

      scriptYandexMap.addEventListener('load', () => {
        this.loadYandexHeatmap();
      });
    } else {
      if (0 === document.getElementById('yandex-map-script').childElementCount) {
        this.initializeYandexHeatmap();
      }
    }
  },
});
</script>

