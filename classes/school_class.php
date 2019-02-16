<?php

class School{

	private $school_name,$school_nick_name,$country_id,$state_name,$city_name,$website,$reputation,$location,$opportunities,$library,$ground_common_areas,$internet,$food,$club,$social,$hapiness;

	public function _set($property,$value){
		if(property_exists($this, $property)){
			$this->$property=$value;
		}
	}

	public function _get($property){
		if (property_exists($this, $property)) {
			return $this->$property;
		}
	}
}

?>