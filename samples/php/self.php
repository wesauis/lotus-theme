<?php

class Clazz
{
  const SOME = 5;
  static $STAT = 5;

  public static function create() 
  {
    print self::SOME;
    print self::$STAT;

    return new self;
  }
}
