import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
/*import { account as ajax } from 'services'*/
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    videoPlayer
  },
  data() {
    return {
      name: 'danxinyao',
      playerOptions: {
        autoplay: true,
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }],
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'account',
      'demoList'
    ])
  },
  mounted() {
  	this.setDemo({name:'danxinyao'})
  	console.log('name',this.demoList)
    this.setLocalStorage()
  },
  methods: {
    ...mapActions([
      'setAuth',
      'setDemo'
    ]),
    //设置缓存 
    setLocalStorage() {
      localStorage.setItem('name','caonima')
      console.log(localStorage.getItem('name'))
    }
  }
}
