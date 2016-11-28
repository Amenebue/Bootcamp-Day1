module.exports={
	Car: function(name='General', model='GM', vehicle_type=None) {
    	this.name = name;
    	this.model = model;
    	this.vehicle_type = vehicle_type;
    }

}
    if this.name in ['Porshe', 'Koenigsegg']{
    	this.num_of_doors = 2
    }
    else:
      	this.num_of_doors = 4

    if 	this.vehicle_type =='trailer'{
       	this.num_of_wheels = 8
    }
    else:
      	this.num_of_wheels = 4


  function is_saloon(this){
    if this.vehicle_type is not 'trailer'{
        this.vehicle_type =='saloon'
        return True
    return False
    }
  function drive(this, moving_speed){
    if moving_speed == 3{
      Car.speed = 1000
    }
    else if moving_speed ==7{
      Car.speed = 77
      this.speed = '0 km/h';

    }

    
	