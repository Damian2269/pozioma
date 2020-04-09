select * from Foodtrucks

create view Weather
AS
 Select
	*
 From WeatherConditions


ALTER VIEW Weather
 AS
  SELECT
  ID_Weather
  ,[type_of_weather] = CAST([type_of_weather] as nVarchar(12)) 
  ,[temperature] = CAST([avg_temp] as nVarchar(12))
  ,[pressure] = CAST([avg_atm_pressure] as nVarchar(20)) 

   FROM WeatherConditions ;

 ALTER VIEW Weather
 AS
  SELECT
  ID_Weather
  ,[type_of_weather]
   ,[temperature]  = CAST([avg_temp] as nVarchar(12))
	When [temperature] BETWEEN 0 AND 8  Then 'very cold'
	When [temperature] BETWEEN 9 AND 13  Then 'cold'
	When [temperature] BETWEEN 14 AND 18  Then 'warm'
	When [temperature] BETWEEN 19 AND 25 Then 'hot'
	When [temperature] > 29					Then 'very cold' 
ELSE NULL	
   End
   ,[pressure]  = CASE 
    When [pressure] Between 990 AND 1000    Then 'low'
	When [pressure] Between 1001 AND 1010   Then 'lighty low'
	When [pressure] Between 1011 AND 1020 Then 'high'
	When [pressure] Between 1021 AND 1030   Then 'very high'    
	ELSE NULL
   End
   FROM WeatherConditions ;
	

 Select * from Weather