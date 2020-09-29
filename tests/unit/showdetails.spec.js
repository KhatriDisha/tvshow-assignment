import { createLocalVue, mount } from '@vue/test-utils'
import Vue from 'vue'
import VueRouter from 'vue-router'
import ShowDetails from '@/components/showDetails'
// const localVue = createLocalVue()
// localVue.use(VueRouter)

describe('showDetails.vue', () => {

  it('should showDetails renders stuff', done => {
    const localVue = createLocalVue()
    localVue.use(VueRouter)
    Vue.use(VueRouter)
    const router = new VueRouter({routes: [
        {path: '/showdetails/:showId', name: 'ShowDetails', component: ShowDetails},
        // {path: '/wherever', name: 'another_component', component: {render: h => '-'}},
    ]})
    const vm = new Vue({
      el: document.createElement('div'),
      router: router,
      render: h => h('router-view')
    })
    router.push({name: 'ShowDetails', params: {showId: 66, ShowName: "The Big Bang Theory"}})
    // Vue.nextTick(() => {
    //   console.log('html:', vm.$el)
    //   console.log('html okkkkkkkkkkkkkk:', vm.html())
    //   expect(vm.html().querySelector('h2').textContent).to.equal("The Big Bang Theory")
    //   done()
    // })
    const wrapper = mount(ShowDetails, { localVue, router })
    wrapper.vm.$nextTick(() => {
        // console.log('okkkkk', wrapper.html())
        const showname = wrapper.find('h2')
        // console.log('shownameeeeeeee',  showname.text())
        // expect(showname.text()).toEqual('The Big Bang Theory')
        expect(showname.text().includes('The Big Bang Theory')).toBe(true);
        done()
    })
    // expect(wrapper.vm.$route).to.be.an('object')
  })
})