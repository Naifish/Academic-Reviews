<?php

class Professor{

	Private $first_name,$middle_name,$last_name,$school_name,$department,$directory_link;
	//$class_id,$helpfullness,$clarity,$easiness,$class_for_credit,$comment,$attendence,$textbook,$textbook_used;

	public function _set($property,$value){
		if(property_exists($this, $property)){
			$this->$property=$value;
		}
	}

	public function _get($property){
		if(property_exists($this, $property)){
			return $this->$property;
		}
	}
}

?>