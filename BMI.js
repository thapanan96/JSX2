export default class BMI{
  bmiCalculate(weight,height){
    return weight/(height**2);
  }
  bmiGande(b,reg){
    var string;
    if(reg =='asia'){
      if(b<=18.5){
        string = "Under weight";
      }
      if(b>18.5 && b<=24.9){
        string = "Normal weight";
      }
      if(b>24.9 && b<=29.9){
        string = "Overweight";
      }
      if(b>29.9){
        string = "Obesity";
      }
    }
    else if(reg =='western'){
      if(b<=28.5){
        string = "Under weight";
      }
      if(b>28.5 && b<=34.9){
        string = "Normal weight";
      }
      if(b>34.9 && b<=39.9){
        string = "Overweight";
      }
      if(b>39.9){
        string = "Obesity";
      }
    }
    return string;
  }
}