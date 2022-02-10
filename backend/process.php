<?php
  include('common.php');
  include('db.php');

  class Detail{
    protected $db;
    
    function __construct($db){
      $this->db = $db;
    }

    public function addDetails($data){
      $err = false;
      try {
        $this->db->save("x_usr_det08441", array(
          "x_fname"   => $data["firstName"],
          "x_lname"   => $data["lastName"],
          "x_email"   => $data["email"],
          "x_phone"   => $data["phone"],
          "x_city"    => $data["city"],
          "x_matter"  => $data["matter"],
          "x_matter_det"  => $data["details"],
          "x_date_sel" => $data["date"],
          "x_created" => date('Y-m-d H:i:s')
        ));
      } catch (Exception $e) {
        $err = true;
        Common::respond($e, "There was an error, please try again.", false);
      }

      !$err && Common::respond(Common::sendEmail($data), "Details added successfully.", true);      
    }
  }

  $d = new Detail($db);
  $d->addDetails($data["formData"]);
  // Common::respond($data, "", true);
?>