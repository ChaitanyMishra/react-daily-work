export default function(){
    <div 
  style="padding: 20px; border: 2px solid black; background: lightgray;"
  onclick="this.style.background = 'salmon'; alert('Card Clicked')">
  <div style="position: relative;">
    <img src="https://via.placeholder.com/150" alt="Profile" />
    <button 
      style="position: absolute; top: 10px; left: 10px;"
      onclick="alert('LinkedIn Clicked')"
    >
      LinkedIn
    </button>
  </div>
  <button onclick="alert('GitHub Clicked')">
    GitHub
  </button>
</div>

}