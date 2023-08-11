document.addEventListener('DOMContentLoaded', function() {
    const advancePrice = document.getElementById('advance_price');
    const advanceButton = document.getElementById('ad_button');
    
    const radioButtons = document.querySelectorAll('input[name="advanced"]');
    
    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
        if (this.checked) {
          const plan = this.value;
          showPlanDetails(plan);
        }
      });
    });
    
    function showPlanDetails(plan) {
      
      if (plan === 'ad_regular') {
        document.getElementById('ad_reg').style.borderColor="indigo";
        document.getElementById('ad_reg').style.borderWidth="3px";
        document.getElementById('ad_stu').style.borderColor="#ccc";
        document.getElementById('ad_stu').style.borderWidth="1px";
        document.getElementById('ad_fin').style.borderColor="#ccc";
        document.getElementById('ad_fin').style.borderWidth="1px";
        price = '₹19,999';
        button_text = "Purchase Now !";
        advanceButton.setAttribute("onClick","window.location.href = 'https://hackersvilla.mojo.page/advanced-course'");
        document.getElementById('ad_1').style.display="block";
        document.getElementById('ad_2').style.display="none";
        document.getElementById('ad_3').style.display="none";
        
      } else if (plan === 'ad_student') {
        document.getElementById('ad_stu').style.borderColor="indigo";
        document.getElementById('ad_stu').style.borderWidth="3px";
        document.getElementById('ad_reg').style.borderColor="#ccc";
        document.getElementById('ad_reg').style.borderWidth="1px";
        document.getElementById('ad_fin').style.borderColor="#ccc";
        document.getElementById('ad_fin').style.borderWidth="1px";
        price = '₹14,999';
        button_text = "Apply for Student Discount";
        advanceButton.setAttribute("onClick","window.location.href = 'https://forms.gle/9GhJJtPuJmehL2Jz6'");
        document.getElementById('ad_2').style.display="block";
        document.getElementById('ad_1').style.display="none";
        document.getElementById('ad_3').style.display="none";
        
      } else if (plan === 'ad_financial') {
        document.getElementById('ad_fin').style.borderColor="indigo";
        document.getElementById('ad_fin').style.borderWidth="3px";
        document.getElementById('ad_reg').style.borderColor="#ccc";
        document.getElementById('ad_reg').style.borderWidth="1px";
        document.getElementById('ad_stu').style.borderColor="#ccc";
        document.getElementById('ad_stu').style.borderWidth="1px";
        price = '₹9,999';
        button_text = "Apply for Financial Aid";
        advanceButton.setAttribute("onClick","window.location.href = 'https://forms.gle/9GhJJtPuJmehL2Jz6'");
        document.getElementById('ad_3').style.display="block";
        document.getElementById('ad_1').style.display="none";
        document.getElementById('ad_2').style.display="none";
      }
      
      advancePrice.textContent = price;
      advanceButton.textContent = button_text;
      
    }
  });