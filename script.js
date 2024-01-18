var fontsize=document.querySelector('#fontsize');
var color=document.querySelector('#color');
var button=document.querySelector('#check');
var paragraph=document.querySelector('.paragraph');

function next() {
  var px=localStorage.getItem('fontsize')
  var bg=localStorage.getItem('color')
  
  if (px && bg) {
    fontsize.value=px;
    color.value=bg;
    paragraph.style.fontSize=px;
    paragraph.style.backgroundColor=bg;
  }
  if (!px && !bg) {
    fontsize.value='18px';
    color.value='bisque';
    paragraph.style.fontSize='18px';
    paragraph.style.backgroundColor='bisque';
  }
}
next();
fontsize.addEventListener("change",function(even) {
  localStorage.setItem('fontsize',even.target.value)
  paragraph.style.fontSize=(even.target.value);
})

color.addEventListener('change',function (even){
  localStorage.setItem('color',even.target.value)
  paragraph.style.backgroundColor=(even.target.value)
})
button.addEventListener('click',function () {
  localStorage.removeItem('fontsize')
  localStorage.removeItem('color')
});