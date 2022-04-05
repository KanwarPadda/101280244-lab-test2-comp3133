export interface Type {
  site_name:string,
  mission_patch_small : string,
    mission_patch : string,
    flight_number : Number,
    mission_name : String,
    launch_year : String,
    details : String,
    links:Link,
    launch_site: LaunchSite;
    rocket:Rocket;
    launch_success: Boolean,
    launch_date_utc : String,


  }
  export interface Rocket{
    rocket_name: string;
    rocket_type: string;
  }
  export interface LaunchSite{
    site_name: string;
  }
  export interface Link{
    mission_patch_small : String,
  }
