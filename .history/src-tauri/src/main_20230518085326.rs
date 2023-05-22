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
fn download(path: &str, file: i16) {
  let file_type = convert_file(file);
  println!("{} with {}", path, file_type)
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![download])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}