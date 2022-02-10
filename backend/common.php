<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Headers: Content-Type');
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');  

  class Common{
    public static function respond($data, $message, $result){
      echo json_encode(array(
        "data" => $data,
        "message" => $message,
        "result" => $result
      ));
    }

    public static function sendEmail($data){
      $date = date('Y-m-d H:i:s');
      $eol = PHP_EOL;
      $username = $data['firstName'] ." ". $data['lastName'];
      $emailObj = array();

      // Primary Email
      // $to = "anurag.131092@gmail.com";
      $to = "felix.gerlach.gera@googlemail.com, anurag.131092@gmail.com";
      $headers = "MIME-Version: 1.0" . $eol;
      $headers.= "Content-type:text/html;charset=UTF-8" . $eol;
      $headers.= "From: Notartermin Team <felix@notartermin.com>";
      $subject = "Eine Neue Anfrage - ".$username;
      
      // Email Text
      $txt = "<div style='font-size: 0.85rem;'>Hello, Agile Sense<br/>";
      $txt = "<div style='font-size: 1rem;'>";
      $txt.= "  Hallo Felix,<br/><br/>";
      $txt.= "  A new user has answered the questionnaire. Below are the user's details:<br/><br/>";
      $txt.= "  <b>Name: </b>".$username."<br/>";
      $txt.= "  <b>Email: </b>".$data['email']."<br/>";
      $txt.= "  <b>Telephone: </b>".$data['phone']."<br/>";
      $txt.= "  <b>Matter: </b>".$data['matter']."<br/>";
      $txt.= "  <b>Details: </b>".$data['details']."<br/>";
      $txt.= "  <b>City: </b>".$data['city']."<br/>";
      $txt.= "  <b>Selected Time Slot: </b>".$data['date']."<br/><br/>";
      $txt.= "  <b>Submission Date & Time: </b>".$date."<br/><br/>";
      $txt.= "  Thanks and Regards,<br/>";
      $txt.= "  Notartermin Team";
      $txt.= "</div>";

      $emailObj["primary"] = array(
        "to" => $to,
        "subject" => $subject,
        "txt" => $txt,
        "headers" => $headers,
        "env" => $GLOBALS['env']
      );

      // Secondary Email
      $headers = "MIME-Version: 1.0". $eol;
      $headers.= "Content-type:text/html;charset=UTF-8". $eol;
      $headers.= "From: Felix von Notartermin <felix@notartermin.com>";

      $to = $data['email'];
      $subject = "Deine Anfrage bei notartermin.com";
      $txt = "<div style='font-size: 1rem;'>";
      $txt.= "  Hi ".$username.",<br/><br/>";
      $txt.= "  wir haben deine Anfrage erfolgreich erhalten und werden diese umgehend bearbeiten.<br/>";
      $txt.= "  Wir werden uns umgehend bei dir melden, sobald wir Neuigkeiten haben.<br/><br/>";
      $txt.= "  Bis dahin,<br/>";
      $txt.= "  Felix von Notartermin";
      $txt.= "</div>";
      
      $emailObj["secondary"] = array(
        "to" => $to,
        "subject" => $subject,
        "txt" => $txt,
        "headers" => $headers,
        "env" => $GLOBALS['env']
      );

      if($GLOBALS['env'] === "local"){
        return $emailObj;
      } else {
        $sent = true;

        foreach ($emailObj as $key => $value) {
          $to      = $value["to"];
          $subject = $value["subject"];
          $txt     = $value["txt"];
          $headers = $value["headers"];
          $sent    = $sent && mail($to, $subject, $txt, $headers);
        }

        return $sent;
      }    
    }
  }

  // Reading the input
  // $params = json_decode($_REQUEST, true);  
  $data = json_decode(file_get_contents('php://input'), true);
?>