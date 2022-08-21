<template>
  <div class="home">
    <div class="home__top">
      <div class="home__title">Управление домами</div>

      <div class="home__add">

          <el-button type="primary" @click="dialogVisible = true">
            Добавить <el-icon class="el-icon--right">
              <Plus />
            </el-icon>
          </el-button>

          <el-dialog
            v-model="dialogVisible"
            title="Добавление дома"
            width="35%"
            :before-close="handleClose"
          >
            
            <div class="el-dialog__content">
              <el-form ref="form" :model="form" label-width="200px" label-position="top" >

                <el-form-item label="Название дома">
                  <el-input  v-model="form.title"></el-input>
                </el-form-item>

                <el-form-item label="Номер дома">
                  <el-input v-model="form.num" type="number" :min="1"></el-input>
                </el-form-item>

                <el-form-item label="Количество этажей">
                  <el-input v-model="form.floors" type="number" :min="1"></el-input>
                </el-form-item>

                <el-form-item label="Количество квартир на этаже.">
                  <el-input v-model="form.flats" type="number" :min="1"></el-input>
                </el-form-item>
                
                <el-form-item label="Адрес">
                  <el-input v-model="form.address"></el-input>
                </el-form-item>

                <div class="el-form-region">
                  <el-form-item label="Регион">
                    <el-select v-model="watchRegion">
                      <el-option :label="region.name_ru" :value="region.id" v-for="(region, index) of regions" :key="index"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-form-item label="Район">
                    <el-select v-model="watchDis">
                      <el-option :label="district.name_ru" :value="district.id" v-for="district in listdistricts" :key="district.id"></el-option>
                    </el-select>
                  </el-form-item>
                </div>

                <el-form-item label="Статус">
                  <el-switch v-model="form.status"></el-switch>
                </el-form-item>
                <!-- <el-form-item label="Activity time">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
                  </el-col>
                </el-form-item> -->

                <el-form-item label="Тип дома">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="Тип дома 1"></el-radio>
                    <el-radio label="Тип дома 2"></el-radio>
                    <el-radio label="Тип дома 3"></el-radio>
                  </el-radio-group>
                </el-form-item>

              </el-form>
            </div>

            <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Отмена</el-button>
                <el-button type="primary" @click="dialogVisible = false, onSubmit()"
                  >Добавить
                </el-button>
              </span>
            </template>
          </el-dialog>

      </div>
    </div>

    <div class="home__bot">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="Название"  />
        <el-table-column prop="count" label="Количество"  />
        <el-table-column prop="sold" label="Продано"  />
        <el-table-column prop="left" label="Осталось"  />
        <el-table-column prop="price" label="Цена"  />
      </el-table>
    </div>
  </div>
</template>

<script>

import {regions} from '../store/modules/regions'
import {districts} from '../store/modules/regions'

export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return{
      dialogVisible: false,
      form: {
        title: '',
        num: 1,
        floors: 1,
        flats: 1,
        address: '',
        type: [],
        status: true,
        resource: '',
        desc: ''
      },
      // modal:{
      //   title: '',
      //   num: '',
      //   floors: '',
      //   flats: '',
      //   address: '',
      //   region: '',
      //   city: '',
      //   district: '',
      //   type: '',
      //   status: '',
      // },
      tableData:[
        {
          name: 'House 1',
          count: '42',
          sold: '10',
          left: '200',
          price: '20000$'
        },
        {
          name: 'House 2',
          count: '31',
          sold: '23',
          left: '150',
          price: '45000$'
        },
      ],
      regions,
      districts,
      listdistricts:[],
      disId: '',
      watchRegion: '',
      watchDis: ''
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('Вы точно хотите отменить операцию?')
      .then(()=> {
        done();
      })
      .catch(() => {});
    },
    onSubmit(){
      console.log('submit!')
    }
  },
  watch:{
    watchRegion(value){
      this.disId = value
      this.listdistricts = this.districts.filter(district => district.region_id == this.disId)
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/views/home.scss';
</style>