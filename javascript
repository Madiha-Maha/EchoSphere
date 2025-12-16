<script>
    //stimulated permission logic (concept only)
    document.querySelectorAll('.allow,.deny').forEach(btn=>{
        btn.addEventListener('click',()=>{
            btn.textContent='Updated';
        });
    });
    </script>