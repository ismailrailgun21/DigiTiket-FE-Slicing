<template>
  <section class="preview container-md d-lg-flex mt-3 w-100">
    <div class="left-side d-flex pt-5 col-lg-8">
      <div class="w-100 d-flex img-container">
        <div class="preview-img col-lg-9 p-0">
          <img
            :src="isSelected"
            :alt="isSelected"
            class="w-100 m-0 justify-content-end"
          />
        </div>
        <div class="photo-collection justify-content-start pl-2 p-0 col-lg-3">
          <div
            v-for="(img, idx) in photoCollection"
            :key="idx"
            @click="selectImage(img.url)"
          >
            <img
              :src="img.url"
              :alt="img.name"
              :class="img.url === isSelected ? 'selected' : ''"
              class="mb-3"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="right-side col-lg-4 p-0">
      <b-list-group>
        <h4 class="title">Jam Buka</h4>
        <b-list-group-item
          v-for="(day, idx) in openHour"
          :key="idx"
          class="d-flex list-day"
          :class="day.isToday ? 'day-active' : ''"
        >
          <div class="day col-4 text-left">{{ day.day }}</div>
          <div class="hour col-6 text-right">{{ day.hour }}</div>
          <div
            class="text-center"
            v-if="day.isToday"
          >
            <b-badge class="primary-bg">Today</b-badge>
          </div>
        </b-list-group-item>
      </b-list-group>
      <div class="py-3">
        <h4 class="title">Informasi Pengguna</h4>
        <div>
          <div class="d-flex ml-4 mb-2">
            <span class="col-lg-4 col-sm-5 text-left">Masa Aktif</span>
            <span class="col-5 text-right">{{ masaAktif }} Hari</span>
            <span class="col-2 text-center"></span>
          </div>
          <div class="d-flex ml-4 mb-2">
            <span class="col-lg-4 col-sm-5 text-left">Harga</span>
            <span class="col-5 text-right">IDR {{ hargaAllDay }}</span>
            <span class="col-2 text-center">
              <div class="text-center">
                <b-badge class="primary-bg">allday</b-badge>
              </div>
            </span>
          </div>
          <div class="d-flex ml-4 mb-2">
            <span class="col-lg-4 col-sm-5 text-left">Harga</span>
            <span class="col-5 text-right"
              >IDR {{ hargaWeekend.toString() }}</span
            >
            <span class="col-2 text-center">
              <div class="text-center">
                <b-badge class="secondary-bg">weekend</b-badge>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isSelected: "https://imgur.com/yXJGDRI.jpg",
      masaAktif: "1",
      hargaAllDay: 50000,
      hargaWeekend: 50000,
      photoCollection: [
        {
          name: "semeru-1",
          url: "https://imgur.com/yXJGDRI.jpg",
        },
        {
          name: "semeru-2",
          url: "https://imgur.com/XVC0Pb4.jpg",
        },
        {
          name: "semeru-3",
          url: "https://imgur.com/Ve7Mwg6.jpg",
        },
      ],
      openHour: [
        {
          day: "Sunday",
          hour: "10:00 - 17:00",
          isToday: false,
        },
        {
          day: "Monday",
          hour: "10:00 - 17:00",
          isToday: false,
        },
        {
          day: "Tuesday",
          hour: "10:00 - 17:00",
          isToday: false,
        },
        {
          day: "Wednesday",
          hour: "10:00 - 17:00",
          isToday: false,
        },
        {
          day: "Thursday",
          hour: "10:00 - 17:00",
          isToday: false,
        },
        {
          day: "Friday",
          hour: "10:00 - 17:00",
          isToday: false,
        },
        {
          day: "Saturday",
          hour: "10:00 - 17:00",
          isToday: false,
        },
      ],
    };
  },
  mounted() {
    const day = new Date().getDay();
    const currency = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    this.hargaAllDay = currency.format(this.hargaAllDay).slice(2);
    this.hargaWeekend = currency.format(this.hargaWeekend).slice(2);
    this.openHour[day].isToday = true;
  },
  methods: {
    selectImage(img) {
      this.isSelected = img;
    },
  },
};
</script>

<style scoped>
span {
  font-weight: 400;
  font-size: 12px;
}
.day-active{
  background-color: #EADCF2 !important;
}
.badge {
  width: 55px;
}
.left-side {
  border-radius: 3px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border: 1px solid #f2f2f2;
  width: 100%;
}

.photo-collection {
  overflow: auto;
}
.photo-collection img {
  cursor: pointer;
  max-width: 162px;
  width: 100%;
  transition: 0.3s all ease;
}

.photo-collection img:hover {
  transition: 0.3s all ease;
  filter: brightness(40%) contrast(90%);
}

.photo-collection div:last-child {
  margin: 0 !important;
}

.preview-img img {
  cursor: pointer;
  object-fit: cover;
}

.img-container {
  display: flex;
}

.selected {
  border: 2px solid #7014a9;
}

.right-side {
  border-radius: 3px;
  border: 1px solid #f2f2f2;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-left: none;
}
.title {
  margin: 1.2rem 2.5rem;
}
.list-group-item,
.list-group-item div {
  border: none;
  font-weight: 400;
  font-size: 12px;
}
.list-day:nth-child(even) {
  background-color: #f6f6f6;
}
@media (max-width: 992px) {
  .left-side {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .right-side {
    display: flex;
    flex-direction: row;
  }
  .photo-collection {
    display: flex;
    margin: 0 !important;
    padding: 0 !important;
    padding-top: 1rem !important;
    justify-content: flex-start !important;
  }
  .photo-collection img {
    margin-right: 1rem !important;
  }
  .img-container {
    display: flex;
    flex-direction: column !important;
  }
  .list-group {
    width: 50%;
  }
}
</style>