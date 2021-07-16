//BMI cat
let ow=0,uw=ow,nw=ow,mo=ow,so=ow,vso=ow
let BMIcat = (bmi) => {
    if (bmi<=18.4 && ++uw) return {'BMI':bmi, 'BMI_CAT': 'Underweight', 'HR': 'Malnutrition risk'}
    if(bmi>18.5 && bmi<=24.9 && ++nw) return {'BMI':bmi, 'BMI_CAT': 'Normal weight', 'HR': 'Low Risk'}
    if(bmi>25 && bmi<=29.9 && ++ow) return {'BMI':bmi, 'BMI_CAT': 'Overweight', 'HR': 'Enhanced risk'}
    if(bmi>30 && bmi<=34.9 && ++mo) return {'BMI':bmi, 'BMI_CAT': 'Moderately obese', 'HR': 'Medium risk'}
    if(bmi>35 && bmi<=39.9 && ++so) {return {'BMI':bmi, 'BMI_CAT': 'Severely obese', 'HR': 'High risk'}} else {++vso; return {'BMI':bmi, 'BMI_CAT': 'Very severely obese', 'HR': 'Very High risk'}}
}


//let  


//BMI
let calcBMI = (data) => {
    ow=0,uw=ow,nw=ow,mo=ow,so=ow,vso=ow
   for (let d in data) {
       let cal = BMIcat((data[d].WeightKg)/(data[d].HeightCm/100))
       data[d] = {...data[d], ...cal}
   }
return {data, countofOverWeight:ow, countofunderWeight:uw, countofnormalWeight:nw, countofmoderatelyObese:mo, countofSevObese:so, countofvsevObese:vso}
}


exports.calcBMI = calcBMI