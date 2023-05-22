// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


use rustube::{url::Url, Video, Callback};
fn convert_file(num: i16) -> String {
  match num {
    0 => String::from("mp3"),
    1 => String::from("mp4"),
    _ => return String::from("mp3")
  } 
}

async fn download_mp3(path: &str, link: &str) {
  // let id = Id::from_raw(link).unwrap();
  let url = Url::parse(link).unwrap();
  // let fetcher = VideoFetcher::from_id(id).unwrap();
  let video = Video::from_url(&url).await.unwrap();
  let stream = video.best_audio().unwrap();
  println!("Downloading to: {}", path);
  stream.download_to_dir_with_callback(
  path, 
    Callback::new().connect_on_progress_closure(|res| {
      println!("Downloading %: {:?}", res.current_chunk/res.content_length * 100.0);
    }).connect_on_complete_closure(|res| {
      println!("Downloaded: {:?}", res);
    })
  ).await.unwrap();
}

#[tauri::command]
fn download(path: &str, link: &str, file: i16) {
  let file_type = convert_file(file);
  match file_type.as_str() {
    "mp3" => {
      tokio::runtime::Builder::new_multi_thread()
        .enable_all()
        .build()
        .unwrap()
        .block_on(download_mp3(path, link));
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