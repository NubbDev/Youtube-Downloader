// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use rustube::{url::Url, VideoFetcher};

fn convert_file(num: i16) -> String {
  match num {
    0 => String::from("mp3"),
    1 => String::from("mp4"),
    _ => return String::from("mp3")
  } 
}

#[tauri::command]
fn download(path: &str, link: &str, file: i16) {
  let file_type = convert_file(file);
  let id = rustube::Id::from_raw(link).unwrap();
  let url = Url::parse(link).unwrap();
  match file_type.as_str() {
    "mp3" => {
      let fetcher = VideoFetcher::from_url(&url)?;
      let video = rustube::Video::from_url(&url).await.unwrap();
    }
    "mp4" => {},
    _ => {}
  }
}

#[tauri::command]
fn message() {
  println!("Hello from Rust!");
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![download, message])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}