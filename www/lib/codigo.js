pergunta = 1;
function Quiz()
{
  function Retorno(buttonIndex)
  {
    if(pergunta == 1)
    {
      if(buttonIndex == "51")
        {
          navigator.notification.beep(1);
          pergunta++;
        }
        else
        {
          navigator.vibrate(1000);
          pergunta++;
        }
    }
    else if(pergunta == 2)
    {
      if(buttonIndex == "81")
        {
          navigator.notification.beep(1);
          pergunta++;
        }
        else
        {
          navigator.vibrate(1000);
          pergunta++;
        }
    }
    else
    {
        if(buttonIndex == "1939")
        {
          navigator.notification.beep(1);
          pergunta++;
        }
        else
        {
          navigator.vibrate(1000);
          pergunta++;
        }
    }
    
  }

  navigator.notification.confirm("Quantos anos se passaram des da criação da internet", Retorno, ["Pergunta 1"], ["51","39"]);

  navigator.notification.confirm("9 x 9 é igual á", Retorno, ["Pergunta 2"], ["81","100"]);

  navigator.notification.confirm("Em que ano acabou a segunda guerra mundial", Retorno, ["Pergunta 3 e Final"], ["1925","1939"]);
}