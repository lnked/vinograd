<?php

error_reporting( E_ALL );

if( !empty( $_SERVER['HTTP_X_REQUESTED_WITH'] ) && strtolower( $_SERVER['HTTP_X_REQUESTED_WITH'] ) == 'xmlhttprequest' )
{
	if( !session_id() )
	{
		session_start();
	}
	
	$parse_url = parse_url( $_SERVER["REQUEST_URI"] ) ;
	
	$path = preg_split( '/\/+/', $parse_url['path'], -1, PREG_SPLIT_NO_EMPTY );
	$controller = isset( $path[1] ) ? $path[1] : '';

	require_once  '../mmail.class.php';

	$empty = "Заполните поле" ;
    $empty_correct = "Заполните поле, корректно" ;

	if( $controller == 'recall' ) {
		if( count($_POST) )
	    {
	        unset( $_SESSION['feedback'] );
	     	
	        $phone	= $_SESSION['feedback']['field']['phone'] 	= $_POST['phone'];
	        
	        if(!$phone)
	            $_SESSION['feedback']['error']['phone'] = $empty;
	        
	        if( !empty( $_SESSION['feedback']['error'] ) )
	        {
	            exit(
			    	json_encode(
			    		array(
			    			'status'	=> false,
			    			'title'		=> 'Отправка заявки',
				    		'errors'	=> $_SESSION['feedback']['error']
			    		)
		    		)
		    	);
	        }
	        else
	        {
				$subject = 'Новое сообщение с сайта';

	            $m = '';

	            $m .= '<p>Здравствуйте!</p>';
	            $m .= '<p>Новое сообщение с сайта</p>';
				$m .= '<p>Дата отправки: <b>'. date( 'd.m.Y H:i:s' ) .'</b></p>';

	            if( $name !== '' )
	            {
	                $m .= '<p>Отправитель: '. stripslashes( $name ).'</p>';
	            }

	            if( $phone !== '' )
	            {
	                $m .= '<p>Номер телефона: '. stripslashes( $phone ) .'</p>';
	            }

	            if( $text !== '' )
	            {
	                $m .= '<p>Текст письма: '. stripslashes( $text ) .'</p>';
	            }

	            $html = "";
				$html .= '<html><body>';
				$html .= '<table width="100%" cellspacing="0" cellpadding="0" border="0">';
				$html .= '<tr>';
				$html .= '<td align="center">';
				$html .= '<table width="600" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">';
				$html .= '<tr>';
				$html .= '<td colspan="3"><img src="http://turbo-sites.ru/images/logo.png" width="164" height="51" /></td>';
				$html .= '</tr>';
				$html .= '<tr>';
				$html .= '<td colspan="3" height="15"></td>';
				$html .= '</tr>';
				$html .= '<tr>';
				$html .= '<td colspan="3" align="center">';
				$html .= '<table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 13px; line-height: 17px; font-family: sans-serif;">';
				$html .= '<tr>';
				$html .= '<td>';
				$html .= $m;
				$html .= '</td>';
				$html .= '</tr>';
				$html .= '</table>';
				$html .= '</td>';
				$html .= '</tr>';
				$html .= '</table>';
				$html .= '</td>';
				$html .= '</tr>';
				$html .= '</table>';
				$html .= '</body></html>';

	            $mail = new mMail();
				$mail->addTo( "ed.proff@gmail.com" );
				$mail->addTo( "turbo-sites@mail.ru" );

				$mail->setSubject( $subject );
	            $mail->setFrom( 'noreply@turbo-sites.ru' );
	            $mail->setHtmlBody( iconv( 'utf-8','windows-1251', $html ) );

	            if( $mail->send() )
	            {
	                unset( $_SESSION['feedback'] );
					exit(
				    	json_encode(
				    		array(
				    			'status'	=> true,
					    		'title'		=> 'Отправка заявки',
					    		'text'		=> 'Сообщение отправлено!'
				    		)
			    		)
			    	);
	            }
				else
	            {
					exit(
				    	json_encode(
				    		array(
				    			'status'	=> false,
				    			'title'		=> 'Отправка заявки',
					    		'text'		=> 'Сообщение не отправлено, произошла ошибка!'
				    		)
			    		)
			    	);
				}
	        }
	    }
	}
	elseif( $controller == 'sendmessage' ) {
	    if( count($_POST) )
	    {
	        unset( $_SESSION['feedback'] );
	     	
	        $phone	= $_SESSION['feedback']['field']['phone'] 	= $_POST['phone'];
	        $name 	= $_SESSION['feedback']['field']['name'] 	= $_POST['name'];
	        $text	= $_SESSION['feedback']['field']['message']	= $_POST['message'];
  
	        if(!$name)
	            $_SESSION['feedback']['error']['name'] = $empty;
	        
			if(!$text)
	            $_SESSION['feedback']['error']['text'] = $empty;
	        
	        if( !empty( $_SESSION['feedback']['error'] ) )
	        {
	            exit(
			    	json_encode(
			    		array(
			    			'status'	=> false,
			    			'title'		=> 'Отправка заявки',
				    		'errors'	=> $_SESSION['feedback']['error']
			    		)
		    		)
		    	);
	        }
	        else
	        {
				$subject = 'Новое сообщение с сайта';

	            $m = '';

	            $m .= '<p>Здравствуйте!</p>';
	            $m .= '<p>Новое сообщение с сайта</p>';
				$m .= '<p>Дата отправки: <b>'. date( 'd.m.Y H:i:s' ) .'</b></p>';

	            if( $name !== '' )
	            {
	                $m .= '<p>Отправитель: '. stripslashes( $name ).'</p>';
	            }

	            if( $phone !== '' )
	            {
	                $m .= '<p>Номер телефона: '. stripslashes( $phone ) .'</p>';
	            }

	            if( $text !== '' )
	            {
	                $m .= '<p>Текст письма: '. stripslashes( $text ) .'</p>';
	            }

	            $html = "";
				$html .= '<html><body>';
				$html .= '<table width="100%" cellspacing="0" cellpadding="0" border="0">';
				$html .= '<tr>';
				$html .= '<td align="center">';
				$html .= '<table width="600" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">';
				$html .= '<tr>';
				$html .= '<td colspan="3"><img src="http://turbo-sites.ru/images/logo.png" width="164" height="51" /></td>';
				$html .= '</tr>';
				$html .= '<tr>';
				$html .= '<td colspan="3" height="15"></td>';
				$html .= '</tr>';
				$html .= '<tr>';
				$html .= '<td colspan="3" align="center">';
				$html .= '<table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 13px; line-height: 17px; font-family: sans-serif;">';
				$html .= '<tr>';
				$html .= '<td>';
				$html .= $m;
				$html .= '</td>';
				$html .= '</tr>';
				$html .= '</table>';
				$html .= '</td>';
				$html .= '</tr>';
				$html .= '</table>';
				$html .= '</td>';
				$html .= '</tr>';
				$html .= '</table>';
				$html .= '</body></html>';

	            $mail = new mMail();
				$mail->addTo( "ed.proff@gmail.com" );
				$mail->addTo( "turbo-sites@mail.ru" );

				$mail->setSubject( $subject );
	            $mail->setFrom( 'noreply@turbo-sites.ru' );
	            $mail->setHtmlBody( iconv( 'utf-8','windows-1251', $html ) );

	            if( $mail->send() )
	            {
	                unset( $_SESSION['feedback'] );
					exit(
				    	json_encode(
				    		array(
				    			'status'	=> true,
					    		'title'		=> 'Отправка заявки',
					    		'text'		=> 'Сообщение отправлено!'
				    		)
			    		)
			    	);
	            }
				else
	            {
					exit(
				    	json_encode(
				    		array(
				    			'status'	=> false,
				    			'title'		=> 'Отправка заявки',
					    		'text'		=> 'Сообщение не отправлено, произошла ошибка!'
				    		)
			    		)
			    	);
				}
	        }
	    }
	}

	return true ;
}