// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

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
  match file_type {
    "mp3" => {},
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