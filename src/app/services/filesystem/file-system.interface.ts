export interface FileSystemInterface {
  /**
   * check if a path.. dir or filename exsists in the filesystem
   *
   * @param type
   * @param pathname full system path
   */
  exists(type: string, pathname: string): boolean;

  /**
   * returns a json list of folder contents
   *
   * @param type
   * @param dirname full system path
   */
  list(type: string, dirname: string): any;

  /**
   * make a dir, return result as a boolean
   *
   * @param type
   * @param dirname full system path
   */
  mkdir(type: string, dirname: string): void;

  /**
   * Return the string data of the requested filename
   *
   * @param type
   * @param filename full system path
   */
  path(type: string, filename: string): string;

  /**
   * Return the string data of the requested filename
   *
   * @param type
   * @param filename full system path
   */
  read(type: string, filename: string): Promise<string|null>;

  /**
   * write the string value tot he request filename
   *
   * @param type
   * @param filename full system path
   * @param data string value to save
   */
  write(type: string, filename: string, data: string): void;
}
