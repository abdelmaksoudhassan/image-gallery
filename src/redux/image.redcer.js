import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: [
        'https://img.freepik.com/free-photo/dystopian-landscape-with-car-water_23-2149369693.jpg?t=st=1729592818~exp=1729596418~hmac=5b3506b3619c371ac1ea7de996c268479ae619244461c75e33ef3b09a223fa53&w=740',
        'https://img.freepik.com/free-photo/full-shot-students-preparing-exam_23-2149647062.jpg?t=st=1729583651~exp=1729587251~hmac=560cb800a167f207b0cd6419774b1736c5bb8d729c6572d05e96e3e10eb5104a&w=826',
        'https://res.cloudinary.com/devjdwk5e/image/upload/v1713221160/cld-sample-4.jpg',
        'https://res.cloudinary.com/devjdwk5e/image/upload/v1713221159/cld-sample-3.jpg',
        'https://res.cloudinary.com/devjdwk5e/image/upload/v1713221114/sample.jpg',
        'https://img.freepik.com/premium-photo/portrait-young-woman-using-mobile-phone_1048944-30344856.jpg?w=826',
        'https://res.cloudinary.com/devjdwk5e/image/upload/v1713221159/cld-sample-2.jpg',
        'https://img.freepik.com/free-photo/smiley-woman-talking-phone-medium-shot_23-2149476757.jpg?t=st=1729465263~exp=1729468863~hmac=8c1f825efe751bd6e28e79a1318c179967f25f033d5b8b0fb56f72c732051e34&w=826',
        'https://img.freepik.com/free-photo/colleagues-working-together-project_23-2149286162.jpg?t=st=1729465290~exp=1729468890~hmac=f8a06d8496f04856b623fd74ea09c54dc19733fdde1fecb6d0a1a960cb8cca7f&w=826',
        'https://res.cloudinary.com/devjdwk5e/image/upload/v1713221158/cld-sample.jpg',
        'https://img.freepik.com/free-photo/high-angle-kid-cheating-school-test_23-2150105086.jpg?t=st=1729583679~exp=1729587279~hmac=abc4ff212956e10eaf1fd2f018eaf71124118314883bbadf37fd64cdd77889d3&w=826',
        'https://img.freepik.com/free-photo/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking_8353-6408.jpg?t=st=1729583619~exp=1729587219~hmac=bbe58a1c4475879baa3aad637915971a84bf411eeb2b040212f598e2551ba2f4&w=826',
        'https://img.freepik.com/premium-photo/full-shot-girl-learning-math-school_23-2150470852.jpg?w=826'
      ],
    index: 0
};
// create slice
const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers:{
    set(state,action){
      state.index = action.payload
    },
    next(state,action){
      const newIndex = state.index + 1
      state.index = newIndex >= state.images.length ? 0 : newIndex
    },
    previous(state,action){
      const newIndex = state.index - 1
      state.index = newIndex < 0 ? state.images.length - 1 : newIndex;
    }
  }
})

export const {set,next,previous} = imageSlice.actions
export default imageSlice.reducer